import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "@/services/axios";

export interface User {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  documentId: string;
  id: number;
  provider: string;
  updatedAt: string;
  username: string;
}

export interface AuthRequest {
  identifier: string;
  password: string;
}

export const useAuthMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: AuthRequest) => {
      return axiosInstance.post<{
        user: User;
        jwt: string;
      }>("/auth/local", values);
    },
    onSuccess({ data }) {
      if (data.user) {
        toast.success("Successfully logged in");
        localStorage.setItem("jwt", data.jwt);
        queryClient.setQueryData(["auth"], data.user);
      }
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return () => {
    localStorage.setItem("jwt", "");
    queryClient.removeQueries({ queryKey: ["auth"] });
    navigate("/login");
  };
};

export const useAuthQuery = () =>
  useQuery({
    queryKey: ["auth"],
    queryFn: () => {
      return axiosInstance.get("/users/me?populate=*") as Promise<User>;
    },
    retry: 0,
    refetchOnMount: false,
    retryOnMount: false,
  });

export const useAuthUpdateQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<User>) => {
      return axiosInstance.put("/users/me", data);
    },
    onSuccess() {
      void queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};

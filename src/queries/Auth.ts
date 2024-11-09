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
    mutationFn: () => {
      return Promise.resolve({
        user: {
          blocked: false,
          confirmed: true,
          createdAt: "2021-10-06T14:37:50.000Z",
          documentId: "1",
          id: 1,
          provider: "local",
          updatedAt: "2021-10-06T14:37:50.000Z",
          username: "GZURE877438957",
        },
        jwt: "token",
      });
    },
    onSuccess(data) {
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

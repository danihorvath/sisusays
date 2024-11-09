import { useEffect } from "react";
import { Box, LinearProgress } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthQuery } from "@/queries/Auth";

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const { data, isFetched, isFetching } = useAuthQuery();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isFetched) {
      if (!data && location.pathname !== "/login") {
        navigate("/login");
      } else if (data && location.pathname === "/login") {
        navigate("/");
      }
    }
  }, [data, isFetched, location.pathname, navigate]);

  return (
    <Box>
      {isFetching && !data && <LinearProgress />}
      {isFetched && (data ?? location.pathname === "/login") && children}
    </Box>
  );
};

export default AuthProvider;

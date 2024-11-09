import LogoSvg from "@/assets/logo.svg";
import { Box } from "@mui/material";

interface LogoProps {
  height: number;
}

export const Logo = ({ height }: LogoProps) => {
  return (
    <Box
      component="img"
      src={LogoSvg}
      alt="Logo"
      height={height}
      display="block"
    />
  );
};

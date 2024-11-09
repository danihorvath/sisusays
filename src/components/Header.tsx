import { Box } from "@mui/material";
import { Menu } from "./Menu";
import { MenuMobileLogin } from "./MenuMobileLogin";
import { NewTopic } from "./NewTopic";

export const HEADER_HEIGHT = 75;

export const Header = () => {
  return (
    <Box
      bgcolor="primary.main"
      color="primary.contrastText"
      px={3}
      py={1}
      height={HEADER_HEIGHT}
      flexShrink={0}
      alignItems="center"
      justifyContent="space-between"
      display="flex"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Menu />
      <Box display="flex" gap={1} alignItems="center">
        <NewTopic />
        <MenuMobileLogin />
      </Box>
    </Box>
  );
};

import { Link as MUILink } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import logo from "../../assets/logo.ico";
import { Box } from "@mui/material";

export const NavigationBar = () => {
  return (
    <Box
      py={2}
      px={8}
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      position={"fixed"}
      zIndex={999}
      top={0}
      left={0}
      width={"100vw"}
      bgcolor={"secondary.contrastText"}
      boxShadow={
        " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      }
    >
      <Box display={"flex"} alignItems={"center"}>
        <img src={logo} alt="website-logo" width={"80px"} height={"80px"} />

        <Typography variant={"h4"} fontWeight={400} ml={4}>
          ARSA
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <MUILink
          component={NavLink}
          to="/"
          ml={4}
          underline="hover"
          variant="body1"
          color={"text.primary"}
        >
          HOME
        </MUILink>
        <MUILink
          component={NavLink}
          to="/about-us"
          ml={4}
          underline="hover"
          variant="body1"
          color={"text.primary"}
        >
          ABOUT
        </MUILink>
        <MUILink
          component={NavLink}
          to="/events"
          ml={4}
          underline="hover"
          variant="body1"
          color={"text.primary"}
        >
          EVENTS
        </MUILink>
        <MUILink
          component={NavLink}
          to="/members"
          ml={4}
          underline="hover"
          variant="body1"
          color={"text.primary"}
        >
          MEMBERS
        </MUILink>
        <MUILink
          component={NavLink}
          to="/contact-us"
          ml={4}
          underline="hover"
          variant="body1"
          color={"text.primary"}
        >
          CONTACT US
        </MUILink>
      </Box>
    </Box>
  );
};

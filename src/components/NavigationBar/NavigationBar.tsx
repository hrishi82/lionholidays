import { NavLink } from "react-router-dom";

import { Link as MUILink, Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface NavBarPropsT {
  bannerTextColor: string;
}

export const NavigationBar = (props: NavBarPropsT) => {
  const { bannerTextColor } = props;
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      py={isMobile ? 2 : 5}
      px={isMobile ? 2 : 8}
      
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      position={"fixed"}
      zIndex={999}
      top={0}
      left={0}
      width={"100vw"}
      bgcolor={bannerTextColor === "black" ? "white" : "transparent"}
      color={bannerTextColor}
    >
      <Box display={"flex"} alignItems={"center"}>
        {/* <img src={logo} alt="website-logo" width={"80px"} height={"80px"} /> */}

        <Typography variant={isMobile ? "body1" : "h4"} fontWeight={600}>
          Lion Holidays
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <MUILink
          component={NavLink}
          to="/"
          ml={isMobile ? 2 : 4}
          underline="hover"
          variant={isMobile ? "caption" : "body1"}
          color={bannerTextColor}
        >
          HOME
        </MUILink>

        <Box
          onClick={() => {
            const footerElement = document.getElementById("footer");

            if (footerElement) {
              footerElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <MUILink
            component={NavLink}
            to="/"
            ml={isMobile ? 2 : 4}
            underline="hover"
            variant={isMobile ? "caption" : "body1"}
            color={bannerTextColor}
          >
            CONTACT US
          </MUILink>
        </Box>
      </Box>
    </Box>
  );
};

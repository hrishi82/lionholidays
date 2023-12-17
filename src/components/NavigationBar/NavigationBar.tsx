import { Link as MUILink } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

interface NavBarPropsT {
  bannerTextColor: string;
}

export const NavigationBar = (props: NavBarPropsT) => {
  const { bannerTextColor } = props;
  return (
    <Box
      py={5}
      px={8}
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

        <Typography variant={"h4"} fontWeight={600} ml={4}>
          Lion Holidays
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <MUILink
          component={NavLink}
          to="/"
          ml={4}
          underline="hover"
          variant="body1"
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
            ml={4}
            underline="hover"
            variant="body1"
            color={bannerTextColor}
          >
            CONTACT US
          </MUILink>
        </Box>
      </Box>
    </Box>
  );
};

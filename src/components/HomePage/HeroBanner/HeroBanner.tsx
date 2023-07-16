import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Image } from "mui-image";
import banner from "../../../assets/banner.jpg";
import { Box } from "@mui/material";

export const HeroBanner = () => {
  return (
    <Box position={"relative"} overflow={"hidden"} borderRadius={2}>
      <Image src={banner} height={"600px"} duration={1500} />
      <Box
        position="absolute"
        top={0}
        left={"40px"}
        width="100%"
        height={"100%"}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Box width={"50%"}>
          <Box mb={2}>
            <Typography
              variant="h3"
              color={"secondary.contrastText"}
              fontWeight={800}
            >
              Amateur Radio Society Of Assam (ARSA)
            </Typography>
            <Typography variant="caption" color={"secondary.contrastText"}>
              You've reached the official website for Amateur Radio Society of
              Assam. If you wish to be a part of our group, click on the button
              below to register!
            </Typography>
          </Box>

          <Button color="secondary" variant="contained">
            Register now!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

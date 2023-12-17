import { Box, Button, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Carousel from "react-material-ui-carousel";
import { Image } from "mui-image";

import turkey from "../../../assets/turkey.jpg";
import greece from "../../../assets/greece.jpg";
import paris from "../../../assets/paris.jpg";
import { CarouselDefaultSettings } from "../../shared/utils";

const BANNER_DATA = [
  {
    imgLink: greece,
    textContent: "Curating unparalleled experiences tailored to you.",
  },
  {
    imgLink: turkey,
    textContent: "Curating unparalleled experiences tailored to you.",
  },
  {
    imgLink: paris,
    textContent: "Curating unparalleled experiences tailored to you.",
  },
];

interface BannerCardPropsT {
  imgLink: string;
  textContent: string;
}

export const HeroBanner = () => {
  const carouselSettings = CarouselDefaultSettings;

  return (
    <Box width="100%" height={"100%"} overflow={"hidden"}>
      <Carousel {...carouselSettings}>
        {BANNER_DATA.map((item, index) => {
          return (
            <BannerCard
              imgLink={item.imgLink}
              textContent={item.textContent}
              key={index}
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

const BannerCard = (props: BannerCardPropsT) => {
  const { imgLink, textContent } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const redirectionHandler = () => {
    const footerElement = document.getElementById("footer");

    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Image
        src={imgLink}
        duration={500}
        height={isMobile ? "40vh" : isMd ? "60vh" : "auto"}
      />
      <Box
        position="absolute"
        bottom={isMobile ? "-50px" : 0}
        left={isMobile ? "20px" : '40px'}
        width="100%"
        height={"100%"}
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Box width={isMobile ? "80%" : isMd ? "50%" : "100%"}>
          <Box mb={2}>
            <Typography
              variant={isMobile ? "h6" : isMd ? "h4" : "h3"}
              color={"secondary.contrastText"}
              fontWeight={600}
              sx={{ textShadow: "-2px 1px 4px rgba(0,0,0,0.48)" }}
            >
              {textContent}
            </Typography>
          </Box>

          <Button
            color="warning"
            variant="contained"
            size={isMobile ? "small" : isMd ? "large" : "large"}
            sx={{
              height: isMobile ? "30px" : isMd ? "50px" : "auto",
              width: isMobile ? "100px" : isMd ? "200px" : "auto",
            }}
            onClick={redirectionHandler}
          >
            Contact us!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

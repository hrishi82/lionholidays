import { Box, Button, Typography } from "@mui/material";

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
  );
};

const BannerCard = (props: BannerCardPropsT) => {
  const { imgLink, textContent } = props;

  const redirectionHandler = () => {
    const footerElement = document.getElementById("footer");

    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Image src={imgLink} duration={500} />
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
              fontWeight={600}
              sx={{ textShadow: "-2px 1px 4px rgba(0,0,0,0.48)" }}
            >
              {textContent}
            </Typography>
          </Box>

          <Button
            color="warning"
            variant="contained"
            size="large"
            sx={{ height: "50px", width: "200px" }}
            onClick={redirectionHandler}
          >
            Contact us!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

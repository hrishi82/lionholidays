import { Box, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { ReviewCard } from "./ReviewCard";
import mofsyDP from "./assets/mofsyDP.png";
import mofsyBG from "./assets/mofsyBG.png";
import bbdasDP from "./assets/bbdasDP.png";
import bbdasBG from "./assets/bbdasBG.png";
import lutfaDP from "./assets/lutfaDP.png";
import lutfaBG from "./assets/lutfaBG.png";

const REVIEWS_DATA = [
  {
    userBG: bbdasBG,
    userDP: bbdasDP,
    name: "Bidyut Bikash Das",
    place: "Sri Lanka",
    comment:
      "It was great experience we had with Lion Holidays for our Sri Lanka tour. Everything arranged properly and worked out accordingly. Hotels and Vehicles booked were perfect. Will definitely recommend others to check with Lion Holidays for tour & travel. Thanks to @Arunav Hazarika for the same.",
  },
  {
    userBG: mofsyBG,
    userDP: mofsyDP,
    name: "Mosfy Ahmed",
    place: "Turkey",
    comment:
      "Everything was well planned and perfectly arranged. We didn’t face any problem in our visit to Turkey. The entire trip was seamless, thanks to the efficient logistics provided by Lion Holidays (especially Arunav for being so patient with us). I highly recommend them for a memorable and hassle free Turkish adventure❤️ Thank you Arunav for Everything!! Thank you Lion Holidays and best wishes for future ventures!",
  },
  {
    userBG: lutfaBG,
    userDP: lutfaDP,
    name: "Lutfa Nahar",
    place: "Dubai",
    comment:
      "We had an amazing trip to dubai through lion holidays. Everything was so perfect. And thank you arunav , for your patience and arranging everything so nicely.. 😊🙏",
  },
];
export const Reviews = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box position={'relative'}>


      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="start"
      >
        {REVIEWS_DATA.map((item, index) => {
          return (
            <Grid
              item
              key={index}
              xs={12}
              md={4}
              container
              justifyContent="center"
              alignItems="center"
              mb={isMobile ? 6 : 0}
            >
              <ReviewCard
                userBG={item.userBG}
                userDP={item.userDP}
                name={item.name}
                place={item.place}
                comment={item.comment}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

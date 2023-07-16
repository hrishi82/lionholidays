import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { HeroBanner } from "./HeroBanner/HeroBanner";
import aboutUs from "../../assets/aboutUs.svg";
import upcomingEvents from "../../assets/upcomingEvents.svg";
import { Box } from "@mui/material";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box mb={30}>
      <HeroBanner />
      <Box mt={15}>
        <Typography variant="h1" gutterBottom>
          About us
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box mr={1} width={"60%"}>
            <Typography variant="body1" gutterBottom>
              Amateur radio, also known as ham radio, is an exciting and
              versatile hobby that revolves around wireless communication. It
              allows licensed operators to communicate with fellow enthusiasts
              from around the world using a wide range of radio frequencies. But
              amateur radio is much more than just talking over the airwaves—it
              is a dynamic and multifaceted endeavor that offers a plethora of
              opportunities and benefits...
            </Typography>
            <Box mt={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/about-us")}
              >
                Read more!
              </Button>
            </Box>
          </Box>
          <Box>
            <img
              src={aboutUs}
              alt="about us image"
              width={"300px"}
              height={"300px"}
            />
          </Box>
        </Box>
      </Box>
      <Box mt={15}>
        <Typography variant="h1" gutterBottom>
          Upcoming Events
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <img
              src={upcomingEvents}
              alt="upcoming events image"
              width={"400px"}
              height={"400px"}
            />
          </Box>
          <Box ml={1} width={"60%"}>
            <Typography variant="body1" gutterBottom>
              Stay up to date with local ham radio club meetings and gatherings
              happening in your area. Connect with fellow radio enthusiasts,
              share experiences, and form lasting friendships within your
              community. These casual get-togethers provide a supportive
              environment for beginners and seasoned operators alike to exchange
              ideas and collaborate on exciting projects.
            </Typography>
            <Box mt={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/events")}
              >
                Go to events!
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

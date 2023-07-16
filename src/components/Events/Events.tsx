import { Typography, Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import upcomingEvents from "../../assets/upcomingEvents.svg";
import { EventCard } from "./EventCard";

const PAST_EVENTS_DATA = {
  events: [
    {
      eventName: "Ham Radio demonstration in various places and institutes",
      eventPlace: "Assam",
      eventLocation: [
        "Gauhati University",
        "Tata Institute of Social Science, Guwahati",
        "Modern English School, Guwahati",
        "Royal Global University, Guwahati",
        "Sonapur",
        "Panikhaiti",
        "Chandmari",
        "Nagaon",
        "Nimati, Jorhat",
        "Jorhat",
      ],
      eventActivities: [],
    },
    {
      eventName: "Field Day",
      eventPlace: "Assam",
      eventLocation: [
        "Guwahati",
        "Nagaon",
        "Sonapur",
        "Panikhaiti",
        "Chandrapur",
        "Gandhimandap",
        "Nimati, Jorhat",
        "Jorhat",
        "Pobitara National Park",
        "Morigaon College",
        "Gauhati Universty",
        "IIT Guwahati",
        "Rani",
      ],
      eventActivities: [
        "Hilltop VHF transmissions in guwahati",
        "HF Communication",
        "Satellite communication",
      ],
    },
    {
      eventName: "Food distribution to covid-19 affected patients",
      eventPlace: "Assam",
      eventLocation: [],
      eventActivities: [],
    },
    {
      eventName: "Yearly attendence in Hamfest India",
      eventPlace: "India",
      eventLocation: [],
      eventActivities: [],
    },
  ],
};

export const Events = () => {
  return (
    <Box mb={50}>
      <Typography variant="h1" gutterBottom>
        Events
      </Typography>

      <Box mb={15}>
        <Typography variant="body1" gutterBottom textAlign={"justify"}>
          Welcome to the upcoming events section! Get ready to immerse yourself
          in the exciting world of amateur radio with a lineup of engaging
          events that will keep you connected and informed. Discover a range of
          ham radio conventions, conferences, and exhibitions where you can meet
          fellow enthusiasts, exchange knowledge, and explore the latest
          advancements in the field. These events provide a platform to connect
          with like-minded individuals, learn from experts, and expand your
          understanding of amateur radio.
        </Typography>
      </Box>

      <Box mb={10}>
        <Typography variant="h3" gutterBottom>
          Upcoming Events
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-around"}
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
          <Box ml={1}>
            <Typography variant="h4" gutterBottom>
              No Upcoming Events!
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box mb={5}>
        <Typography variant="h3" gutterBottom mb={8}>
          Past Events
        </Typography>
        <Grid
          container
          xs={12}
          spacing={2}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
        >
          {PAST_EVENTS_DATA.events.map((el) => (
            <Grid item flexGrow={1}>
              <EventCard
                eventName={el.eventName}
                eventPlace={el.eventPlace}
                eventLocation={el.eventLocation}
                eventActivities={el.eventActivities}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

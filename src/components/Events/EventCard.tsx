/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import hamRadioCover from "../../assets/hamRadioCover.jpeg";

interface EventCardProps {
  eventName: string;
  eventPlace: string;
  eventLocation?: string[];
  eventActivities?: string[];
}
export const EventCard = (props: EventCardProps) => {
  const { eventName, eventPlace, eventLocation, eventActivities } = props;

  const locationsStr: string =
    eventLocation && eventLocation?.length > 0 ? eventLocation?.join(", ") : "";
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        // height="140"
        image={hamRadioCover}
        alt="ham radio cover"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {eventName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {eventPlace}
        </Typography>

        {eventLocation && eventLocation.length > 0 && (
          <Box my={3}>
            <Typography sx={{ mb: 0.5 }} variant="body1">
              Event Locations
            </Typography>

            <Typography color="text.secondary" variant="body2">
              {locationsStr}
            </Typography>
          </Box>
        )}

        {eventActivities && eventActivities.length > 0 && (
          <Box>
            <Typography sx={{ mb: 0.5 }} variant="body1">
              Activities
            </Typography>
            {eventActivities.map((el: string, index) => (
              <Typography color="text.secondary" variant={"body2"}>
                {`${index}. ${el}`}
              </Typography>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

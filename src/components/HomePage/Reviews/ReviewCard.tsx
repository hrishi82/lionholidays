import { Typography } from "@mui/material";
import { Box, Card, CardMedia, CardContent, Avatar } from "@mui/material";


interface ReviewCardPropsT {
  userBG: string;
  userDP: string;
  name: string;
  place: string;
  comment: string;
}

export const ReviewCard = (props: ReviewCardPropsT) => {
  const { userBG, userDP, name, place, comment } = props;
  return (
    <Card sx={{ maxWidth: "337px" }}>
      <Box position="relative">
        <CardMedia
          component="img"
          height="137px"
          image={userBG}
          alt="ham radio cover"
        />
        <Box
          position={"absolute"}
          bottom={20}
          left={"50%"}
          sx={{  transform:"translate(-50%, 50%)" }}
          border= {"2px solid white"}
          borderRadius={"50%"}
        >
          <Avatar alt={name} src={userDP} sx={{ width: 100, height: 100 }}/>{" "}
        </Box>
      </Box>

      <CardContent>
        <Box mt={4} textAlign={"center"}> 
          <Typography variant="body2">{name}</Typography>
          <Typography variant="caption" color="text.secondary">
            <i>Recently loved: {place}</i>
          </Typography>
        </Box>

        <Box m={2}>
          <Typography variant="body2" color="text.secondary" textAlign={"justify"}>
            {comment}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

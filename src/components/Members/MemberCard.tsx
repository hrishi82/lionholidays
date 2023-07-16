import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

interface MemberCardProps {
  memberName: string;
  callSign: string;
}
export const MemberCard = (props: MemberCardProps) => {
  const { memberName, callSign } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Member
        </Typography>
        <Typography variant="h5" component="div">
          {memberName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {callSign}
        </Typography>
      </CardContent>
    </Card>
  );
};

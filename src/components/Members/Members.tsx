import { Box, Typography, Grid } from "@mui/material";
import { MemberCard } from "./MemberCard";
// import grey from "@mui/material/colors";

// interface IMemberList {
//   members: { memberName: "string"; callSign: "string" }[];
// }

const MEMBER_LIST = {
  advisors: [
    { memberName: "Mr. P. Saikia", callSign: "APTS, Director (C), APRO" },
    { memberName: "Mr. Debajit Sarma", callSign: "VU2DBM" },
    { memberName: "Mr. Rudra Pd. Sarma", callSign: "VU2PTF" },
  ],
  president: [{ memberName: "Paresh Ch. Barhma", callSign: "VU2YPB" }],
  vicePresident: [{ memberName: "Ritu Mahanta", callSign: "VU3ZRI" }],
  secretary: [{ memberName: "Bhagaban Barman", callSign: "VU2XBP" }],
  asstSecretary: [{ memberName: "Pranab Kr Choudhury", callSign: "VU2YPK" }],
  coordinator: [
    { memberName: "Sandeep Baruah", callSign: "VU2MUE" },
    { memberName: "Sasanka Baruah", callSign: "VU3INI" },
  ],
  members: [
    { memberName: "B. C. Chaliha", callSign: "VU3BCH" },
    { memberName: "Jayanta Talukdar", callSign: "VU2XJT" },
    { memberName: "Pintu Sarkar", callSign: "VU3OKB" },
    { memberName: "Gautam Kr Sarma", callSign: "VU3WTI" },
    { memberName: "Sanjoy Kalita", callSign: "VU3RIV" },
    { memberName: "Nabajyoti Mazumdar", callSign: "VU3FHG" },
    { memberName: "G. C. Swargari", callSign: "VU3TQC" },
    { memberName: "Nabaratan Narzary", callSign: "VU2KEO" },
    { memberName: "Dr Hirak Ranjan Das", callSign: "VU3HRR" },
    { memberName: "Anirudh Sharma", callSign: "VU2TKG" },
    { memberName: "Jay Kumar Sharma", callSign: "VU2DOG" },
    { memberName: "Sultan Saleh Ahmed", callSign: "VU3OIP" },
    { memberName: "R. Boro", callSign: "VU3TQF (Treasurer)" },
  ],
};

export const Members = () => {
  return (
    <Box mb={10}>
      <Box display={"flex"}>
        <Typography variant="h1" gutterBottom>
          Present Members
        </Typography>
        <Typography variant="h5" gutterBottom ml={3} sx={{ color: "grey:500" }}>
          (from 2022)
        </Typography>
      </Box>

      {/* <Typography variant="body1" gutterBottom>
        Here is the list of the present committee members from 2021
      </Typography> */}

      <Box mb={5} mt={10}>
        <Typography variant="h4" gutterBottom>
          Advisors
        </Typography>

        <Grid container xs={12}>
          {MEMBER_LIST.advisors.map((el) => (
            <Grid item m={2}>
              <MemberCard memberName={el.memberName} callSign={el.callSign} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mb={5}>
        <Typography variant="h4" gutterBottom>
          President
        </Typography>

        <Grid container xs={12}>
          {MEMBER_LIST.president.map((el) => (
            <Grid item m={2}>
              <MemberCard memberName={el.memberName} callSign={el.callSign} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mb={5}>
        <Typography variant="h4" gutterBottom>
          Vice President
        </Typography>

        <Grid container xs={12}>
          {MEMBER_LIST.vicePresident.map((el) => (
            <Grid item m={2}>
              <MemberCard memberName={el.memberName} callSign={el.callSign} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mb={5}>
        <Typography variant="h4" gutterBottom>
          Secretary
        </Typography>

        <Grid container xs={12}>
          {MEMBER_LIST.secretary.map((el) => (
            <Grid item m={2}>
              <MemberCard memberName={el.memberName} callSign={el.callSign} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mb={5}>
        <Typography variant="h4" gutterBottom>
          Assistant Secretary
        </Typography>

        <Grid container xs={12}>
          {MEMBER_LIST.asstSecretary.map((el) => (
            <Grid item m={2}>
              <MemberCard memberName={el.memberName} callSign={el.callSign} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mb={5}>
        <Typography variant="h4" gutterBottom>
          Coordinator
        </Typography>

        <Grid container xs={12}>
          {MEMBER_LIST.coordinator.map((el) => (
            <Grid item m={2}>
              <MemberCard memberName={el.memberName} callSign={el.callSign} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mb={5}>
        <Typography variant="h4" gutterBottom>
          Executive Members
        </Typography>

        <Grid container xs={12}>
          {MEMBER_LIST.members.map((el) => (
            <Grid item m={2}>
              <MemberCard memberName={el.memberName} callSign={el.callSign} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

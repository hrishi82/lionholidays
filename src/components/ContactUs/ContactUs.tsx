import { Typography, Button, Paper } from "@mui/material";

import Box from "@mui/material/Box";

export const ContactUs = () => {
  return (
    <Box mb={15}>
      <Typography variant="h1" gutterBottom>
        Contact us
      </Typography>

      <Paper>
        <Box p={6}>
          <Box mb={4}>
            <Typography variant="body1" gutterBottom color={"text.secondary"}>
              Mail:
            </Typography>
            <Typography variant="body1" gutterBottom>
              assamham2005@gmail.com
            </Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="body1" gutterBottom color={"text.secondary"}>
              Phone:
            </Typography>
            <Typography variant="body1" gutterBottom>
              +91-8638036054, +91-9101229584
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";

interface InfoCardPropsT {
  headerText: string;
  textContent: string;
  emoji: any;
}

export const PerksCard = (props: InfoCardPropsT) => {
  const { headerText, textContent, emoji } = props;
  return (
    <Box>
      <Box fontSize={30}>{emoji}</Box>
      <Typography variant="h5" my={1}>
        {headerText}
      </Typography>
      <Typography variant="body2" mt={2} color={'text.secondary'} textAlign={"justify"}>
        {textContent}
      </Typography>
    </Box>
  );
};

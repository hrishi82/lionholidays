import { Link, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      height={"250px"}
      width={"100vw"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      py={4}
      px={8}
    >
      <Box>
        <Typography
          variant={"h4"}
          fontWeight={400}
          ml={1}
          color={"neutral.light"}
        >
          ARSA
        </Typography>
      </Box>

      <Box>
        <Typography
          variant={"h6"}
          fontWeight={400}
          ml={1}
          color={"neutral.light"}
        >
          ( Site under construction 🚧 )
        </Typography>
      </Box>

      <Box>
        <Box>
          <Typography
            variant={"body1"}
            fontWeight={400}
            my={2}
            color={"neutral.light"}
          >
            CONTACT US
          </Typography>
        </Box>
        <Box color={"neutral.light"}>
          <Box display={"flex"} alignItems={"center"} my={1}>
            <Box mr={2}>
              <FacebookIcon fontSize={"small"} />
            </Box>

            <Link
              href="https://www.facebook.com/groups/hamradioassam"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <Typography variant="body1" color={"neutral.light"}>
                Facebook
              </Typography>
            </Link>
          </Box>
          <Box display={"flex"} alignItems={"center"} my={1}>
            <Box mr={2}>
              <MailIcon fontSize={"small"} />
            </Box>

            <Typography variant="body1" color={"neutral.light"}>
              assamham2005@gmail.com
            </Typography>
          </Box>

          <Box display={"flex"} alignItems={"flex-start"} my={1}>
            <Box mr={2}>
              <LocalPhoneIcon fontSize={"small"} />
            </Box>

            <Box>
              <Typography variant="body1" color={"neutral.light"}>
                +91-8638036054
              </Typography>

              <Typography variant="body1" color={"neutral.light"}>
                +91-9101229584
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

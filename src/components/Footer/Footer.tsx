import { Link, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      height={"250px"}
      display={"flex"}
      alignItems={"start"}
      justifyContent={"space-between"}
      
      py={4}
      px={8}
    >
      <Box>
        <Typography
          variant={"h5"}
          fontWeight={400}
          
          
        >
          Lion Holidays
        </Typography>
        <Typography
          variant={"body2"}
          mt={2}
          color={'text.secondary'}
          
        >
          17 , Sublane, 9, 3rd Bye Ln N, Lachit Nagar, Guwahati, Assam 781007
        </Typography>
      </Box>


      <Box>
        <Box>
          <Typography
            variant={"body1"}
            fontWeight={400}
            my={2}
            
          >
            CONTACT US
          </Typography>
        </Box>
        <Box >
          <Box display={"flex"} alignItems={"center"} my={1}>
            <Box mr={2}>
              <FacebookIcon fontSize={"small"} />
            </Box>

            <Link
              href="https://www.facebook.com/profile.php?id=61551050214831"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <Typography variant="body1" >
                Facebook
              </Typography>
            </Link>
          </Box>
          <Box display={"flex"} alignItems={"center"} my={1}>
            <Box mr={2}>
              <InstagramIcon fontSize={"small"} />
            </Box>

            <Link
              href="https://www.instagram.com/lionholidays_official/"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <Typography variant="body1" >
                Instagram
              </Typography>
            </Link>
          </Box>
          <Box display={"flex"} alignItems={"center"} my={1}>
            <Box mr={2}>
              <MailIcon fontSize={"small"} />
            </Box>

            <Typography variant="body1" >
              Arunav.lionholidays@gmail.com
            </Typography>
          </Box>

          <Box display={"flex"} alignItems={"flex-start"} my={1}>
            <Box mr={2}>
              <LocalPhoneIcon fontSize={"small"} />
            </Box>

            <Box>
              <Typography variant="body1" >
                +91-9127255853
              </Typography>

              
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

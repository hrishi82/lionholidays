import { Box, Grid, Typography } from "@mui/material";

import { HeroBanner } from "./HeroBanner/HeroBanner";
import { PerksCard } from "./PerksCard";
import { PageContentWrapper } from "../shared/PageContentWrapper";
import { PERKS_SECTION_DATA, REVIEWS_SECTION_BG_COLOR } from "./utils/helper";
import { Reviews } from "./Reviews/Reviews";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const HomePage = () => {
  return (
    <Box mb={30}>
      <Box id="homepage-banner">
        <HeroBanner />
      </Box>

      <PageContentWrapper>
        <Box my={4}>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="space-between"
            alignItems="start"
          >
            {PERKS_SECTION_DATA.map((item) => {
              return (
                <Grid item xs={12} md={2.8}>
                  <PerksCard
                    headerText={item.headerText}
                    textContent={item.textContent}
                    emoji={item.emoji}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </PageContentWrapper>

      <Box bgcolor={REVIEWS_SECTION_BG_COLOR} flex={1} position={"relative"}>
        <Box
          position={"absolute"}
          top={"-40px"}
          left={"50%"}
          sx={{ transform: "translate(-50%, 0%)" }}
         
        >
          <AccountCircleIcon sx={{ fontSize: '70px' }} color="warning" />
        </Box>
        <PageContentWrapper>
          <Box my={8}>
            <Typography
              textAlign={"center"}
              variant="h4"
              color={"secondary"}
              fontWeight={600}
            >
              HEAR FROM OUR CUSTOMERS
            </Typography>
          </Box>
          <Box mt={4}>
            <Reviews />
          </Box>
        </PageContentWrapper>
      </Box>
    </Box>
  );
};

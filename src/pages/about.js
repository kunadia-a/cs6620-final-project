import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AboutPage } from '../components/account/about-page';
import { DashboardLayout } from '../components/dashboard-layout';

const About = () => (
  <>
    <Head>
      <title>
        {/* Account | Material Kit */}        
        About | Material Kit

      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
         About

          {/* Account */}
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AboutPage />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

About.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default About;

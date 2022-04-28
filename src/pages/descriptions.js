import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { 
  StockDescription, 
  CashDescription, 
  DebtDescription, 
  FundsDescription, 
  TreasuryDescription, 
  YieldChartDescription } from '../components/account/metrics-descriptions';
import { DashboardLayout } from '../components/dashboard-layout';

const Descriptions = () => (
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
         Financial Dashboard Metrics Information

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
            <StockDescription />
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <CashDescription />
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <DebtDescription />
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <FundsDescription />
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <TreasuryDescription />
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <YieldChartDescription />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
Descriptions.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Descriptions;

import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import InterestRateAPI from 'src/API/interestRateAPI';

export const TotalCustomers = (props) => (
  <Card 
  sx={{ height: '100%' }}
  {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Average Interest Rate
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            <InterestRateAPI displayData={"interestRate"}/>
          </Typography>
        </Grid>
        <Grid item>
          {/* <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar> */}
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Interest Rate Publish Date
        </Typography>
        </Box>
        <Box
           sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        >
        <DateRangeIcon />
        <Typography
          variant="caption"
          sx={{
            mr: 1
          }}
        >
          <InterestRateAPI displayData={"recordDate"}/>
        </Typography>
     </Box>
    </CardContent>
  </Card>
);

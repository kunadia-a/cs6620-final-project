import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import NationalDebtAPI from 'src/API/nationalDebtAPI';
import DateRangeIcon from '@mui/icons-material/DateRange';

export const NationalDebt = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
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
          <div>
            US Treasury
          </div>
            National Debt
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
        <Box
          sx={{
           alignItems: 'center',
            display: 'flex',
            pt: 0
          }}
        >
          <NationalDebtAPI displayData={"nationalDebt"}/>
          </Box>
          </Typography>
        </Grid>
        <Grid item>
          {/* <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar> */}
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 3
        }}
      >
        <Typography
          color="textSecondary"
          variant="caption"
        >
          National Debt Publish Date
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
          <NationalDebtAPI displayData={"recordDate"}/>
        </Typography>
     </Box>
    </CardContent>
  </Card>
);

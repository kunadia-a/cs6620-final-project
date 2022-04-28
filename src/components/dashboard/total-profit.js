import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CashBalanceAPI from 'src/API/cashBalanceAPI';
import DateRangeIcon from '@mui/icons-material/DateRange';

export const TotalProfit = (props) => (
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
            US Treasury
            <div>
            Operating Cash Balance
            </div>
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            <CashBalanceAPI displayData={"cashBalance"}/>
          </Typography>
        </Grid>
        <Grid item>
          {/* <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
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
          Operating Cash Balance Publish Date
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
          <CashBalanceAPI displayData={"recordDate"}/>
        </Typography>
     </Box>
    </CardContent>
  </Card>
);

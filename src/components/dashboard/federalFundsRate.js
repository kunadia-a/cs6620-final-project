import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { FundsRateAPI } from 'src/API/fundsRateAPI';
import DateRangeIcon from '@mui/icons-material/DateRange';

export const FederalFunds = (props) => (
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
            Effective Federal Funds Rate (EFFR)
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
        <Box
          sx={{
           alignItems: 'center',
            display: 'flex',
            pt: 4
          }}
        >
          {/* <FundsRateAPI displayData={"fundsRate"}/> */}
          RATE
          </Box>
          </Typography>
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
          EFFR Effective Date
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
          {/* <FundsRateAPI displayData={"recordDate"}/> */}
          DATE
        </Typography>
     </Box>
    </CardContent>
  </Card>
);
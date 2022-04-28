import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import AboutSectionContent from "src/components/account/aboutSectionContent"

export const StockDescription = (props) => (
  <Card {...props}>
    <CardContent>
      <AboutSectionContent displayData={"stockPriceDescription"}/>
    </CardContent>
  </Card>
);

export const CashDescription = (props) => (
  <Card {...props}>
    <CardContent>
      <AboutSectionContent displayData={"operatingCashBalanceDescription"}/>
    </CardContent>
  </Card>
);

export const DebtDescription = (props) => (
  <Card {...props}>
    <CardContent>
      <AboutSectionContent displayData={"nationalDebtDescription"}/>
    </CardContent>
  </Card>
);

export const FundsDescription = (props) => (
  <Card {...props}>
    <CardContent>
      <AboutSectionContent displayData={"federalFundsRateDescription"}/>
    </CardContent>
  </Card>
);

export const TreasuryDescription = (props) => (
  <Card {...props}>
    <CardContent>
      <AboutSectionContent displayData={"treasuryMetricsDescription"}/>
    </CardContent>
  </Card>
);

export const YieldChartDescription = (props) => (
  <Card {...props}>
    <CardContent>
      <AboutSectionContent displayData={"yieldChartDescription"}/>
    </CardContent>
  </Card>
);
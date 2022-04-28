import { Card } from '@mui/material';
import TreasuryRatesAPI from 'src/API/treasuryRatesAPI';

export const TreasuryRates = (props) => (
  <Card 
    sx={{ height: '100%' }}
    {...props}
  >
    <TreasuryRatesAPI 
      displayData={"interestRate"} 
      fixedIncomeType={"3month"}
    />

    <TreasuryRatesAPI 
      displayData={"interestRate"} 
      fixedIncomeType={"2year"}
    />

    <TreasuryRatesAPI 
      displayData={"interestRate"} 
      fixedIncomeType={"10year"}
    />
  </Card>
);

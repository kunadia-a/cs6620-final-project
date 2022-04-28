import { display } from '@mui/system';
import DateRangeIcon from '@mui/icons-material/DateRange';
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';

const TreasuryRatesAPI = (props) => {

    const [interestRate, setInterestRate] = useState({
        investmentType: undefined,
        rate: undefined,
        date: undefined
    });

    const chooseInvestment = (fiscalData) => {
        if(props.fixedIncomeType === '3month') {
            setInterestRate({
                investmentType: fiscalData.data[0].security_desc,
                rate: fiscalData.data[0].avg_interest_rate_amt,
                date: fiscalData.data[0].record_date
            });
        }

        if (props.fixedIncomeType === '2year') {
            setInterestRate({
                investmentType: fiscalData.data[1].security_desc,
                rate: fiscalData.data[1].avg_interest_rate_amt,
                date: fiscalData.data[1].record_date
            });
        }

        if (props.fixedIncomeType === '10year') {
            setInterestRate({
                investmentType: fiscalData.data[4].security_desc,
                rate: fiscalData.data[4].avg_interest_rate_amt,
                date: fiscalData.data[4].record_date
            });
        }

    }


    function fetchInterestRate() {
        try {
          const url = 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/avg_interest_rates?sort=-record_date&format=json'
          const rate = fetch(url)
            .then((response) => response.json())
            .then((fiscalData) => {
            //   setInterestRate({
            //       investmentType: fiscalData.data[0].security_desc,
            //       rate: fiscalData.data[0].avg_interest_rate_amt,
            //       date: fiscalData.data[0].record_date
            //   })
                chooseInvestment(fiscalData);
            })
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
        fetchInterestRate();
    }, []);

    if (interestRate.rate === undefined) {
        console.log("Interest rate is undefined")
        return "loading...";
    } else {
        console.log("interest rate received");
        if (props.displayData === "interestRate") {
            return (
                <div>
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
                                    {/* Average Interest Rate */}
                                    {interestRate.investmentType}
                                </Typography>
                                <Typography
                                    color="textPrimary"
                                    variant="h4"
                                >
                                    {interestRate.rate}{"%"}
                                </Typography>
                            </Grid>
                            
                            <Grid item>
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
                                {interestRate.date}
                                {/* <InterestRateAPI displayData={"recordDate"}/> */}
                            </Typography>
                        </Box>
                    </CardContent>
                </div>
            );
        }
    }
}; export default TreasuryRatesAPI;
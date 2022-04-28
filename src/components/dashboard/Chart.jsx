import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid, Typography} from '@mui/material';
// import {Line, LineChart, XAxis, YAxis, CartesianGrid} from 'react-chartjs-2'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// set states
// get api values for yeilds


function DataChart() {

    const [rates, setRates] = useState({
        year1: undefined,
        year2: undefined,
        year5: undefined,
        // year10: undefined,
        // year30: undefined,
    });

    const data = [
        {
          name: '1 year',
          yeilds: rates.year1,
          amt: 5,
        },
        {
          name: '2 year',
          yeilds: rates.year2,
          amt: 5,
        },
        // {
        //   name: '5 year',
        //   yeilds: rates.year5,
        //   amt: 5,
        // },
        {
          name: '10 year',
          yeilds: rates.year10,
          amt: 5,
        },
        // {
        //   name: '30 year',
        //   yeilds: rates.year30,
        //   amt: 5,
        // },
      ];

    function fetchInterestRate() {
        try {
          const URL = 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/avg_interest_rates?sort=-record_date&format=json'
          const rate = fetch(URL)
            .then((response) => response.json())
            .then((fiscalData) => {
                console.log("YEAR1: ", rates.year1)
              setRates({
                  year1: fiscalData.data[0].avg_interest_rate_amt,
                  year2: fiscalData.data[5].avg_interest_rate_amt,
                  year10: fiscalData.data[2].avg_interest_rate_amt,
                //   year10: fiscalData.data[3].avg_interest_rate_amt,
                //   year30: fiscalData.data[19].avg_interest_rate_amt,
              });
            });
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
        fetchInterestRate();
    }, []);

    if (rates.year1 === undefined) {
        return <p>Loading...</p>
    }
    else {
        return (
            <LineChart
              width={600}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone"
                dataKey="yeilds"
                stroke="#8884d8"
                activeDot={{ r: 8 }} />
            </LineChart>
        )
    }    
}


function Chart() {
    return (
        <div>
            <Card
                sx={{ height:'100%' }}
                // {...props}
            >
            <CardContent>
            <Grid
                container
                spacing={4}
                sx={{ justifyContent: 'space-between' }}
            >
                <Grid item>

                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="overline"
                >
                    Yield Curve
                </Typography>
                <Typography
                    color="textPrimary"
                    variant="h6"
                >
                <Box
                sx={{
                alignItems: 'center',
                    display: 'flex',
                    pt: 2
                }}
                >
                </Box>
                    {DataChart()}
                </Typography>
                </Grid>
            </Grid>            
            </CardContent>
            </Card>
        </div>
    );
} export default Chart;
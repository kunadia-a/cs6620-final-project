import { display } from '@mui/system';
import React, { useEffect, useState } from 'react';

const InterestRateAPI = (props) => {

    const [interestRate, setInterestRate] = useState({
        rate: undefined,
        date: undefined
    });
    // const [interestRate, setInterestRate] = useState();
    // const [recordDate, setRecordDate] = useState();

    function fetchInterestRate() {
        try {
          const url = 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/avg_interest_rates?sort=-record_date&format=json'
          const rate = fetch(url)
            .then((response) => response.json())
            .then((fiscalData) => {
            //   setInterestRate(fiscalData.data[0].avg_interest_rate_amt);
              setInterestRate({
                  rate: fiscalData.data[0].avg_interest_rate_amt,
                  date: fiscalData.data[0].record_date
              })
            })
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
        // let mounted = true;
        fetchInterestRate();
        // if (interestRate === undefined) {
        //     console.log("Interest rate is undefined")
        //     return "loading...";
        // } else {
        //     console.log("interest rate received");
        //     if (props.displayData === "interestRate") {
        //         return interestRate + " %";
        //     }
        // }

        // return () => mounted = false;
    }, []);

    if (interestRate.rate === undefined) {
        console.log("Interest rate is undefined")
        return "loading...";
    } else {
        console.log("interest rate received");
        if (props.displayData === "interestRate") {
            return interestRate.rate + " %";
        }
        if (props.displayData === "recordDate") {
            return interestRate.date;
        }
    }
}; export default InterestRateAPI;
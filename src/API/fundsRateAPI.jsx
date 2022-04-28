import { display } from '@mui/system';
import { useEffect, useState } from 'react';

const FundsRateAPI = (props) => {

    const [fundsRate, setFundsRate] = useState({
        rate: undefined,
        date: undefined
    });

    function fetchFundsRate() {
        try {
          const url = 'https://markets.newyorkfed.org/api/rates/unsecured/effr/last/10.json'
          const rate = fetch(url)
            .then((response) => response.json())
            .then((fiscalData) => {
              setFundsRate({
                  rate: fiscalData.refRates[0].percentRate,
                  date: fiscalData.refRates[0].effectiveDate
              })
            })
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
        fetchFundsRate();
    }, []);

    if (fundsRate.rate === undefined) {
        return "loading...";
    } else {
        console.log("EFFR received");
        if (props.displayData === "fundsRate") {
            return fundsRate.rate + "%";
        }
        if (props.displayData === "recordDate") {
            return fundsRate.date;
        }
    }
}; export default FundsRateAPI;
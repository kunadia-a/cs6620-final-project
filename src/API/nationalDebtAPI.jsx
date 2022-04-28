import { display } from '@mui/system';
import { useEffect, useState } from 'react';

const NationalDebtAPI = (props) => {

    const [nationalDebt, setNationalDebt] = useState({
        debt: undefined,
        date: undefined
    });

    function fetchNationalDebt() {
        try {
          const url = 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date'
          const debt = fetch(url)
            .then((response) => response.json())
            .then((nationalDebt) => {
                setNationalDebt({
                  debt: nationalDebt.data[0].debt_held_public_amt,
                  date: nationalDebt.data[0].record_date
              })
            })
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
        fetchNationalDebt();
    }, []);

    if (nationalDebt.debt === undefined) {
        console.log("Debt is undefined")
        return "loading...";
    } else {
        console.log("Debt received");
        if (props.displayData === "nationalDebt") {
            let trillion = 1000000000000;
            let debtNumber = Number((nationalDebt.debt / trillion).toFixed(3));
            return "$" + debtNumber + "T";
        }
        if (props.displayData === "recordDate") {
            return nationalDebt.date;
        }
    }
}; export default NationalDebtAPI;
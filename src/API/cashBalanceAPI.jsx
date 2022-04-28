import { useEffect, useState } from 'react';

const CashBalanceAPI = (props) => {

    const [cashBalance, setCashBalance] = useState({
        cash: undefined,
        date: undefined
    });

    function fetchCashBalance() {
        try {
          const url = 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/dts/dts_table_1?sort=-record_date'
          const cash = fetch(url)
            .then((response) => response.json())
            .then((cashBalance) => {
                setCashBalance({
                  cash: cashBalance.data[0].open_today_bal,
                  date: cashBalance.data[0].record_date
              })
            })
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
        fetchCashBalance();
    }, []);

    if (cashBalance.cash === undefined) {
        console.log("Cash balance is undefined")
        return "loading...";
    } else {
        console.log("Cash balance received");
        if (props.displayData === "cashBalance") {
            let thousand = 1000;
            let cashNumber = Number((cashBalance.cash / thousand).toFixed(3));
            return "$" + cashNumber + "B";            
        }
        if (props.displayData === "recordDate") {
            return cashBalance.date;
        }
    }
}; export default CashBalanceAPI;
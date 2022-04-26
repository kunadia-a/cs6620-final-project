import React, { useEffect, useState } from 'react';

const StockAPI = (stockTicker) => {
    const ticker = stockTicker.stockTicker;
    // console.log("TICKER!", ticker);
    let v1 = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols='
    let v2 = ticker;
    let v3 = '%2CBTC-USD%2CEURUSD%3DX'
    // console.log("URL!", v1 + v2 + v3);

    const URL = v1 + v2 + v3;
    // console.log("This is value:", ticker)
    const APILINK = "https://yfapi.net/v11/finance/quoteSummary/AAPL";
    const APIKEY = "soCvVBKHIqa4w8UJXu7fS6g6Vf2dDJo03NAzuBcu";

    // const [stockData, setStockData] = useState();
    const [stockPrice, setStockPrice] = useState();   
    
    useEffect(() => {
        console.log("THIS THIS THIS")
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: URL,
            params: {
                modules: 'defaultKeyStatistics,assetProfile'
            },
            headers: {
                'x-api-key': APIKEY,
            }
        };

        const delayDebounceFn = setTimeout(() => {
            // console.log("HERE HERE HERE!!!")
            // Send Axios request here
            axios.request(options).then(function (response) {
                // console.log("HERE!")
                // console.log(response.data);
                let APIdata = response.data.quoteResponse.result[0].ask;
                // console.log()
                setStockPrice(APIdata)
                // console.log("THIS IS stock PRICE: ", stockPrice);
            }).catch(function (error) {
                console.error(error);
            });
          }, 3000)
      
          return () => clearTimeout(delayDebounceFn)
        
    },[URL, stockPrice]);

    if (stockPrice === undefined) {
        // console.log("Stock price is undefined. If error is 429 then too many request have been made.")
        return "loading..."
    }
    else {
        // console.log("everything is fine!")
        return stockPrice
    }
}; export default StockAPI;
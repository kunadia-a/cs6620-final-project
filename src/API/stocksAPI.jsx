import React, { useEffect, useState } from 'react';

const StockAPI = (stockTicker) => {
    const APILINK = "https://yfapi.net/v11/finance/quoteSummary/AAPL";
    const APIKEY = "soCvVBKHIqa4w8UJXu7fS6g6Vf2dDJo03NAzuBcu";

    const [stockData, setStockData] = useState();
    const [stockPrice, setStockPrice]  = useState();

    // console.log("THIS IS STOCK TICKER: ", stockTicker.toString());

    function parseURL() {
        let v0 = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CBTC-USD%2CEURUSD%3DX'

        let v1 = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols='
        let v2 = stockTicker
        let v3 = '%2CBTC-USD%2CEURUSD%3DX'

        console.log("URL: ", v1 + v2 + v3)
        // return v1 + v2 + v3;
        return v0;
    }
    
    

    useEffect(() => {
        var axios = require("axios").default;

        var options = {
        method: 'GET',
        url: parseURL(),
        params: {
            modules: 'defaultKeyStatistics,assetProfile'
        },
        headers: {
            'x-api-key': APIKEY,
        }
    };

        axios.request(options).then(function (response) {
            console.log("HERE!")
            // console.log(response.data);
            let APIdata = response.data.quoteResponse.result[0].ask;
            // console.log()
            setStockPrice(APIdata)
            console.log("THIS IS stock PRICE: ", stockPrice);
            // return stockPrice
            // setStockPrice(response.data)
        }).catch(function (error) {
            console.error(error);
        });
        // fetch(APILINK)
        // .then(response => response.json())
        //     // 4. Setting *dogImage* to the image url that we received from the response above
        // .then(data => setStockData(data.message))
    },[stockPrice]);


    if (stockPrice === undefined) {
        console.log("Stock price is undefined")
        return "loading..."
    }
    else {
        console.log("everything is fine!")
        return stockPrice
    }


    // must add return statement eventually
    // return "Working on API"

    // if (stockPrice === null) {
    //     return "loading..."
    //     console.log("STOCK PRICE IS NULL??")
    // } else {
    //     return stockPrice
    // }
    // return stockPrice;
}; export default StockAPI;
import React, { useEffect, useState } from 'react';

const StockAPI = (stockTicker) => {
    const [stockPrice, setStockPrice] = useState();
    const [stockLongName, setStockName] = useState();
    const [stockSymbol, setStockSymbol] = useState();

    const paddingStyle = '15px';

    const ticker = stockTicker.stockTicker;
    let v1 = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols='
    let v2 = ticker;
    let v3 = '%2CBTC-USD%2CEURUSD%3DX'

    const URL = v1 + v2 + v3;
    const APIKEY = "soCvVBKHIqa4w8UJXu7fS6g6Vf2dDJo03NAzuBcu";

    useEffect(() => {
        let axios = require("axios").default;
        let options = {
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
            axios.request(options).then(function (response) {
                let APIdata = response.data.quoteResponse.result[0].ask;
                let stockName = response.data.quoteResponse.result[0].longName;
                let stockSym = response.data.quoteResponse.result[0].symbol;
                setStockPrice(APIdata)
                setStockName(stockName)
                setStockSymbol(stockSym);
            }).catch(function (error) {
                console.error(error);
            });
          }, 1000)
          return () => clearTimeout(delayDebounceFn)  
    },[URL, stockPrice]);

    if (stockPrice === undefined) {
        return (
            <div style= {{paddingTop: paddingStyle}}>
                <p>Loading...</p>
            </div>
        );
    }
    else {
        // 1.125 rem
        // 2 rem
        return (
            <div style= {{paddingTop: paddingStyle}}>
                <p>{stockLongName} ({stockSymbol})</p>
                <p style={{fontSize: '2rem'}}>${stockPrice}</p>
            </div>
        );
    }
}; export default StockAPI;
import React, { useEffect, useState } from 'react';

const StockAPI = (stockTicker) => {
    const APILINK = "https://dog.ceo/api/breeds/image/random"

    const [stockData, setStockData] = useState();
    const [stockPrice, setStockPrice]  = useState();

    console.log("THIS IS STOCK TICKER: ", stockTicker.toString());
    
    useEffect(() => {
        fetch(APILINK)
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setStockData(data.message))
    },[]);

    console.log(stockData);


    // must add return statement eventually
    return "Working on API"
}; export default StockAPI;
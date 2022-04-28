const AboutSectionContent = (props) => {
    
    const groupMembers =
        <div>
            <div>
            <strong>Financial Dashboard Team:</strong>
            </div>
            <br />
            <div>
                Ankita Kunadia, Chance Lamberth, Katie Han, Christopher Holzheu
            </div>
        </div>;
    const stockPriceDescription = 
        <div>
            <div>
            <strong>Stock Price</strong>
            </div>
            <br />
            <div>
                Displays the current US Stock Market price of a publicly traded company's stock ticker that is entered into the input field
            </div>
        </div>;
    const operatingCashBalanceDescription = 
        <div>
            <div>
            <strong>US Treasury Operating Cash Balance</strong>
            </div>
            <br />
            <div>
                The US Treasury's Operating Cash Balance is the bank account the federal government holds at the Federal Reserve
            </div>
        </div>;
    const nationalDebtDescription = 
        <div>
            <div>
            <strong>US Treasury National Debt</strong>
            </div>
            <br />
            <div>
                The US Treasury's current Debt to the penny is amount of money the U.S. owes to outside debtors such as U.S. banks and investors, businesses, individuals, state and local governments, Federal Reserve and foreign governments and international investors
            </div>
        </div>;
    const federalFundsRateDescription = 
        <div>
            <div>
            <strong>Effective Federal Funds Rate</strong>
            </div>
            <br />
            <div>
                The Effective Federal Funds Rate (EFFR) is rate refers to the target interest rate set by the Federal Open Market Committee, the policymaking body of the Federal Reserve System, and is the rate at which the fed suggests commercial banks borrow and lend their excess reserves to each other overnight
            </div>
        </div>;
    const treasuryMetricsDescription = 
        <div>
            <div>
            <strong>Treasury Bills, Notes, and Floating Rate</strong>
            </div>
            <br />
            <div>
                Each percentage shown in this section is a calculated percentage based on the aggregate interest payments divided by the total debt. reasury yields also tell us how investors feel about the economy. The higher the yields on long-term U.S. Treasuries, the more confidence investors have in the economic outlook. But high long-term yields can also be a signal of rising inflation in the future.
            </div>
            <br />
            <div>
                A Treasury Bill is a short-term debt obligation backed by the U.S. Treasury Department with a maturity of one year or less.
            </div>
            <br />
            <div>
                A Treasury note (T-note for short) is a marketable U.S. government debt security with a fixed interest rate and a maturity between two and 10 years.
            </div>
            <br />
            <div>
                A floating-rate note (FRN) is a bond that has a variable interest rate, vs. a fixed-rate note that has an interest rate that doesn't fluctuate. The interest rate is tied to a short-term benchmark rate, such as LIBOR or the Fed funds rate, plus a quoted spread, or rate that holds steady.FRNs appeal to investors because they can benefit from higher interest rates since the rate on the floater adjusts periodically to current market rates.
            </div>
        </div>;
    const yieldChartDescription = 
        <div>
            <div>
            <strong>Yield Curve</strong>
            </div>
            <br />
            <div>
            The U.S. Treasury yield curve refers to a line chart that depicts the yields of short-term Treasury bills compared to the yields of long-term Treasury notes and bonds. The chart shows the relationship between the interest rates and the maturities of U.S. Treasury fixed-income securities.
            </div>
        </div>;


    if (props.displayData === "groupMembers") {
        return groupMembers;
    }
    if (props.displayData === "stockPriceDescription") {
        return stockPriceDescription;
    }
    if (props.displayData === "operatingCashBalanceDescription") {
        return operatingCashBalanceDescription;
    }
    if (props.displayData === "nationalDebtDescription") {
        return nationalDebtDescription;
    }
    if (props.displayData === "federalFundsRateDescription") {
        return federalFundsRateDescription;
    }
    if (props.displayData === "treasuryMetricsDescription") {
        return treasuryMetricsDescription;
    }
    if (props.displayData === "yieldChartDescription") {
        return yieldChartDescription;
    }

}; export default AboutSectionContent; 
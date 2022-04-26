import React, { useEffect,useState } from 'react';
import { Box, Card, CardContent, Grid, Typography, TextField, InputAdornment, SvgIcon } from '@mui/material';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import MoneyIcon from '@mui/icons-material/Money';
import StockAPI from 'src/API/stocksAPI';
import { Search as SearchIcon } from '../../icons/search';

export const Budget = (props) => {
  const [stock, setStock] = useState(); 


  // This will hopefully lag the user input....s
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log("HERE HERE HERE!!!")
      // Send Axios request here
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [stock])


  const onInputChange = (e) => {
    // setStock(e.target.value.toUpperCase());
    setStock(e.target.value.toUpperCase());
  }

  

  return (
    <div>
      <Box sx={{ mt: 0 }}>
          <Card>
            <CardContent>
              
              <Box sx={{ maxWidth: 500 }}>
                <TextField
                  fullWidth
                  onChange={onInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon
                          color="action"
                          fontSize="small"
                        >
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="Search stock"
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>
        </Box>


      <Card
        sx={{ height: '100%' }}
        {...props}
      >
        <CardContent>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'space-between' }}
          >
            <Grid item>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="overline"
              >
                Stock Data
              </Typography>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                {/* IMPLEMENTING THE STOCK API */}
                {/* <StockAPI stockTicker={"AAPL"}/>  */}
                <StockAPI stockTicker = {stock}/>
              </Typography>
            </Grid>
            <Grid item>
              {/* <Avatar
                sx={{
                  backgroundColor: 'error.main',
                  height: 56,
                  width: 56
                }}
              >
                <MoneyIcon />
              </Avatar> */}
            </Grid>
          </Grid>
          {/* <Box
              sx={{
                pt: 2,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ArrowDownwardIcon color="error" />
              <Typography
                color="error"
                sx={{
                  mr: 1
                }}
                variant="body2"
              >
                12%
              </Typography>
              <Typography
                color="textSecondary"
                variant="caption"
              >
                Since last month
              </Typography>
          </Box> */}
        </CardContent>
      </Card>
    </div>
  );

};
  
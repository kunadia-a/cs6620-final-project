import React, { useEffect,useState } from 'react';
import { Box, Card, CardContent, Avatar, Grid, Typography, TextField, InputAdornment, SvgIcon } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import StockAPI from 'src/API/stocksAPI';
import { Search as SearchIcon } from '../../icons/search';

export const Stocks = (props) => {
  const [stock, setStock] = useState();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (stock === undefined || stock === '') {
        setStock('AMZN');
      }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [stock])


  const onInputChange = (e) => {
    setStock(e.target.value.toUpperCase());
  }  

  return (
    <div>
      <Card
        sx={{ height:'100%' }}
        {...props}
      >
    <CardContent>
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>

          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Stock Price
          </Typography>
          <Typography
            color="textPrimary"
            variant="h6"
          >
        <Box
          sx={{
           alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        >
          <Box sx={{ mt: 0 }}>
            {/* Search in the bar to find a stock price */}
              <Box sx={{ maxWidth: 600 }}>
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
            </Box>
          </Box>
          <StockAPI stockTicker={stock} />
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 3
        }}
      >
        </Box>
        <Box
           sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 6
          }}
        >
      </Box>
    
    </CardContent>
  </Card>
    </div>
  );

};
  
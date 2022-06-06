import React, { Component } from 'react';

import { Grid, Box, Typography } from '@mui/material';

export default class Profile extends Component {
  handleClick = (e: any, countryCode: any) => {
    console.log(countryCode);
  };
  render() {
    return (
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        minHeight='80vh'
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item lg={4} sm={4} md={4} xs={4}>
          <Box>
            <Typography variant='h5' sx={{ color: '#23ccef' }}>
              ! Hey there this is Profile Componant{' '}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

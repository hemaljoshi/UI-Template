import React, { Component } from 'react';
import { Grid, Box, Typography } from '@mui/material';

export default class Statement extends Component {
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
        <Grid item lg={5} sm={5} md={5} xs={5}>
          <Box>
            <Typography variant='h5' sx={{ color: '#23ccef' }}>
              ! Hey there this is Statements Componant{' '}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

import React, { Component } from 'react';
import { Grid, TextField, Chip, Stack } from '@mui/material';

const emailValidation =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

interface MyState {
  chips: any[];
  error: boolean;
}
export default class Profile extends Component<{}, MyState> {
  state: MyState = {
    chips: [],
    error: false,
  };

  inputRef: any = React.createRef();

  handleDelete = (index: number) => {
    const filteredChips = this.state.chips.filter((_, ind) => ind !== index);
    this.setState({
      chips: filteredChips,
    });
  };

  handleKeyPress = (e: any) => {
    const tempArr = [...this.state.chips];
    const isChipRepeated = tempArr.some(
      (chip) => chip === this.inputRef.current.value
    );
    if (!isChipRepeated) {
      if (this.inputRef.current.value.match(emailValidation)) {
        this.setState({
          error: false,
        });
        tempArr.push(this.inputRef.current.value);
      } else {
        this.setState({
          error: true,
        });
      }
    }
    if (e.key === 'Enter') {
      this.setState({
        chips: tempArr,
      });
      this.inputRef.current.value = '';
    }
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
          <Stack
            direction='column'
            spacing={1}
            sx={{ border: '1px solid #b8b8b8', borderRadius: 2, p: 4 }}
          >
            <TextField
              label='Email'
              fullWidth
              inputRef={this.inputRef}
              onKeyPress={this.handleKeyPress}
              error={this.state.error}
              helperText={this.state.error && 'Please Enter correct Email'}
            />
            <Grid
              container
              spacing={1}
              direction='row'
              alignItems='center'
              justifyContent='center'
            >
              {this.state.chips.length !== 0 &&
                this.state.chips.map((chip: any, index: number) => (
                  <Grid item key={index}>
                    <Chip
                      label={chip}
                      onDelete={() => this.handleDelete(index)}
                    />
                  </Grid>
                ))}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    );
  }
}

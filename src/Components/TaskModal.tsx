import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
  Button,
  Checkbox,
  Divider,
  TextField,
  Typography,
} from '@mui/material';

const ModalBoxStyle = {
  margin: '5% auto',
  backgroundColor: 'white',
  borderRadius: '0.50rem',
  width: '30vw',
  height: 'auto',
  padding: '2rem',
  position: 'relative',
  bgcolor: 'background.paper',
  p: 4,
};

interface MyProps {
  open: boolean;
  handleClose: () => void;
  itemId: number;
  checked: boolean;
  title: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  editTask: (itemId: number) => void;
}

export default class TaskModal extends Component<MyProps> {
  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={ModalBoxStyle}>
          <Box>
            <Typography
              variant='h5'
              sx={{
                fontSize: '1.375rem',
                fontWeight: 300,
                color: '#333',
                pl: '12px',
                textAlign: 'left',
                mb: 1,
              }}
            >
              Edit Task No {this.props.itemId}
            </Typography>
            <Divider />
          </Box>
          <Box sx={{ display: 'flex', my: 3 }}>
            <Checkbox
              checked={this.props.checked}
              onChange={this.props.handleChange}
            />
            <TextField
              value={this.props.title}
              onChange={this.props.onChangeTitle}
              fullWidth
              label='title'
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant='contained'
              onClick={() => this.props.editTask(this.props.itemId)}
            >
              Edit Task
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  }
}

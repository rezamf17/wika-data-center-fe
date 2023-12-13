import React from 'react'
import { Grid, Button, Modal, Box, Typography, TextField, FormControl, MenuItem, InputLabel } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const ModalMemberProyek: React.FC<ModalProps> = ({ open, handleClose }) => {

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.2)',
    padding: 3,
  };
  const headerBox = {
    backgroundColor: '#f2f2f2',
    padding: 2,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  }
  const footerBox = {
    backgroundColor: '#f2f2f2',
    padding: 16,
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    borderTop: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'center',
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={headerBox}>
            <Typography id="modal-modal-title" align='center' variant="h6" component="h2" gutterBottom>
              Tambah Member Proyek
            </Typography>
            <Grid container m={2}>
              <Grid item xs={3}>Nama Proyek</Grid>
              <Grid item>
                <TextField size='small'></TextField>
              </Grid>
            </Grid>
            <Grid container margin={2}>
              <Grid item xs={3}>Member Proyek</Grid>
              <Grid item>
                <FormControl sx={{ minWidth: 220 }} size="small">
                  <InputLabel id="demo-select-small-label">Member Proyek</InputLabel>
                  <Select
                    id="demo-select-small"
                    value={age}
                    label="Member Proyek"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ footerBox }}>
            <Grid container spacing={2}>
              <Grid item xs={7}>

              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" color="primary" sx={{ marginTop: '2em' }} onClick={handleClose}>
                  Close
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="primary" sx={{ marginTop: '2em' }}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Modal>
    </>
  )
}

export default ModalMemberProyek
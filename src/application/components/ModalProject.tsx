import React, { useState } from 'react'
import {
  Grid,
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,

} from '@mui/material'
import '../../assets/css/Modal.css'
import UploadImage from './UploadImage';
import ReactQuill from 'react-quill';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import 'react-quill/dist/quill.snow.css';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const ModalProject: React.FC<ModalProps> = ({ open, handleClose }) => {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('');
  const [departemen, setDepartemen] = useState('');


  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };
  const handleChangeDepartemen = (event: SelectChangeEvent) => {
    setDepartemen(event.target.value);
  };

  const handleOnChangeDesc = (event: any) => {
    setValue(event)
  }

  function submit(){
    console.log('value',value)
  }

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      [{'align': []}],
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'align',
  ];

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
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
  const bodyBox = {
    marginTop: '2em',
    width: '50vw'
  }
  const bodyBoxKanan = {
    marginTop: '2em',
    width: '40vw'
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
              Register Proyek
            </Typography>
          </Box>
          <Grid container>
            <Grid item>
              <Box sx={bodyBox}>
                <Grid container spacing={5}>
                  <Grid item xs={5}>Nama Proyek</Grid>
                  <Grid item xs={7} sx={{ padding: '1em' }}><TextField size='small' fullWidth /></Grid>
                </Grid>
                <Grid container spacing={5}>
                  <Grid item xs={5}>Status Proyek</Grid>
                  <Grid item xs={7} sx={{ padding: '1em' }}>
                    <FormControl size="small" fullWidth>
                      <InputLabel id="demo-select-small-label">Status</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={status}
                        label="Status"
                        onChange={handleChangeStatus}
                      >
                        <MenuItem value={10}>On-Going</MenuItem>
                        <MenuItem value={20}>Hold</MenuItem>
                        <MenuItem value={30}>Finish</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={5}>
                  <Grid item xs={5}>Departemen</Grid>
                  <Grid item xs={7} sx={{ padding: '1em' }}>
                    <FormControl size="small" fullWidth>
                      <InputLabel id="demo-select-small-label">Departemen</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={departemen}
                        label="Departemen"
                        onChange={handleChangeDepartemen}
                      >
                        <MenuItem value={10}>Building</MenuItem>
                        <MenuItem value={20}>Bim dan Riset</MenuItem>
                        <MenuItem value={30}>Infrastruktur</MenuItem>
                        <MenuItem value={30}>EPCC</MenuItem>
                        <MenuItem value={30}>Knowledge Management</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={5}>
                  <Grid item xs={5}>Tempat Proyek</Grid>
                  <Grid item xs={7} sx={{ padding: '1em' }}><TextField size='small' fullWidth /></Grid>
                </Grid>
                <Grid container spacing={5}>
                  <Grid item xs={5}>Tanggal Berakhir Proyek</Grid>
                  <Grid item xs={7} sx={{ padding: '1em' }}><TextField size='small' fullWidth /></Grid>
                </Grid>
                {/* <Grid container spacing={5}>
                  <Grid item xs={5}>Deskripsi Proyek</Grid>
                  <Grid item xs={7} sx={{ padding: '1em', width: '50vw' }}>
                    <div style={{ border: '1px solid #ccc', padding: '8px' }}>
                      <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: '200px' }} />
                    </div>
                  </Grid>
                </Grid> */}
              </Box>
            </Grid>
            <Grid item>
              <Box sx={bodyBoxKanan}>
                <Grid container>
                  <Grid item xs={3}>Image</Grid>
                  <Grid item>
                    <UploadImage />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
                <Grid item xs={2.8}>Deskripsi Proyek</Grid>
                <Grid item sx={{ padding: '1em', width: '60vw' }}>
                    <div style={{ border: '1px solid #ccc', padding: '8px' }}>
                      <ReactQuill theme="snow" value={value} onChange={handleOnChangeDesc} style={{ height: '200px' }} modules={modules} formats={formats} />
                    </div>
                  </Grid>
          </Grid>
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
                <Button variant="contained" color="primary" sx={{ marginTop: '2em' }} onClick={submit}>
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

export default ModalProject
import React, { useState, useEffect } from 'react'
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
  Select,
  SelectChangeEvent,
} from '@mui/material'
import UserService from '../../domain/usecase/usecaseUser'
import { useFormik } from 'formik'
import AlertEntities from '../../domain/entities/AlertEntities'
import UserEntities from '../../domain/entities/UserEntities'
import AlertComponent from '../components/AlertComponent'
import * as Yup from 'yup'

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  onSubmit:(res: AlertEntities) => void;
	data : UserEntities;
}
const ModalUser: React.FC<ModalProps> = ({ open, handleClose, onSubmit, data }) => {
  const [nip, setNip] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [no_hp, setNoHP] = useState('')
  const [status, setStatus] = useState('')
  const [alert, setAlert] = useState<AlertEntities>(
    { code: false,
      message: "",
      show: false
    })
 
 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30vw',
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

  const Submit = (event: any) => {
    event.preventDefault();
    
  }

	const readData = () => {
		setNip(data.nip)
		setName(data.nama_lengkap)
		setEmail(data.email)
		setRole(data.nip)
		setNoHP(data.no_hp)
		setStatus(data.status)
	}

  useEffect(() => {
    // console.log(data);
		readData()
  }, [alert, data]);
  
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={Submit}>
        <Box sx={style}>
        <AlertComponent code={alert.code} message={alert.message} show={alert.show}/>
          <Box sx={headerBox}>
            <Typography id="modal-modal-title" align='center' variant="h6" component="h2" gutterBottom>
              Delete Account
            </Typography>
          </Box>
          <Box sx={bodyBox}>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								NIP
							</Grid>
							<Grid item xs={8}>
								{nip}
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								Nama Lengkap
							</Grid>
							<Grid item xs={8}>
								{name}
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								Email
							</Grid>
							<Grid item xs={8}>
								{email}
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								Role Code
							</Grid>
							<Grid item xs={8}>
								{role}
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								Nomor HP
							</Grid>
							<Grid item xs={8}>
								{no_hp}
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								Status
							</Grid>
							<Grid item xs={8}>
								{status}
							</Grid>
						</Grid>
					</Box>
          <Box sx={{ footerBox }}>
            <Grid container spacing={2}>
              <Grid item xs={7}>

              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" color="error" sx={{ marginTop: '2em' }} onClick={() => { handleClose(); }}>
                  Close
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button type='submit' variant="contained" color="error" sx={{ marginTop: '2em' }}>
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </form>
      </Modal>
    </>
  )
}

export default ModalUser
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
import AlertComponent from '../components/AlertComponent'
import UserEntities from '../../domain/entities/UserEntities'
import { RoleToRoleCode } from '../../infra/Utilities'
import * as Yup from 'yup'

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  onSubmit:(res: AlertEntities) => void;
  data : UserEntities
}
const ModalUser: React.FC<ModalProps> = ({ open, handleClose, onSubmit, data }) => {
	const [id, setId] = useState<number>(0)
  const [nip, setNip] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [no_hp, setNoHP] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
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
  const gridKeyStyle = {
    textAlign: 'left',
    marginLeft: '1em'
  }
  const gridValueStyle = {
    marginBottom: '1em'
  }
  const handleChangeRole = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const Submit = (event: any) => {
    event.preventDefault();
    const req = {
      role_code : role,
      nip : nip,
      nama_lengkap : name,
      email : email,
      password : confirmPassword,
      no_hp : no_hp,
      status : status,
      createdBy : "SYSTEM",  
      updatedBy : "SYSTEM"
    }
    const userService = new UserService();
    userService.insertDataUser(req).then((result) => {
      // console.log(result)
      let res:AlertEntities = {
        code : true,
        message : "",
        show : true
      }
      if(result.code == 200){
        res = {
          code : true,
          message : "Data Berhasil Ditambahkan",
          show : true
        }
        clearForm()
        handleClose()
      }else{
        res = {
          code : false,
          message : result.message,
          show : true
        }
      }
      setAlert(res)
      onSubmit(res)
    })
    // alert('asd')
  }

  const validationSchema = Yup.object({
    nip : Yup.number().required().integer('Must be an number'),
    name: Yup.string().required('Name is required'),
    no_hp: Yup.number().required().integer('Must be an number'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required').min(6).max(16),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
    role : Yup.string().required(),
    status : Yup.string().required()
  });

  const formik = useFormik({
    initialValues : {
      nip : "",
      no_hp : "",
      name : "",
      email : "",
      password : "",
      confirmPassword : "",
      role : "",
      status : ""
    },
    validationSchema,
    onSubmit: Submit
  })
  const handleForm = (event:any) => {
    const { target } = event;
    formik.setFieldValue(
        target.name, 
        target.value, 
        target.nip
        );
  };
  const readData = () => {
    setId(data.id_data ?? 0)
		setNip(data.nip)
		setName(data.nama_lengkap)
		setEmail(data.email)
		setRole(RoleToRoleCode(data.role_code))
		setNoHP(data.no_hp)
		setStatus(data.status == 'Active' ? 'A' : 'I')
	}
  const clearForm = ():void => {
    setNip("")
    setName("")
    setEmail("")
    setNoHP("")
    setRole("")
    setPassword("")
    setConfirmPassword("")
    setStatus("")
    setAlert({ code: false,
      message: "",
      show: false
    })
  }

  useEffect(() => {
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
              Edit Account
            </Typography>
          </Box>
          <Box sx={bodyBox}>
            <Grid container sx={gridValueStyle} spacing={2}>
              <Grid item sx={gridKeyStyle} xs={3}>
                NIP
              </Grid>
              <Grid item xs={7}>
                <TextField id="nip" onChange={handleForm} value={nip} onInput={(e: any) => setNip(e.target?.value)} type="text" size='small' placeholder='NIP' name='nip' required/>
                <InputLabel error>{formik.errors.nip}</InputLabel>
              </Grid>
            </Grid>
            <Grid container sx={gridValueStyle} spacing={2}>
              <Grid item sx={gridKeyStyle} xs={3}>
                Name
              </Grid>
              <Grid item xs={7}>
                <TextField id="name" value={name} onChange={handleForm} onInput={(e: any) => setName(e.target?.value)} type="text" size='small' placeholder='Name' name='name' required/>
                <InputLabel error>{formik.errors.name}</InputLabel>
              </Grid>
            </Grid>
            <Grid container sx={gridValueStyle} spacing={2}>
              <Grid item sx={gridKeyStyle} xs={3}>
                Email
              </Grid>
              <Grid item xs={7}>
                <TextField id="email" onChange={handleForm} value={email} onInput={(e: any) => setEmail(e.target?.value)} type="text" size='small' placeholder='Email' name='email' required/>
                <InputLabel error>{formik.errors.email}</InputLabel>
              </Grid>
            </Grid>
            <Grid container sx={gridValueStyle} spacing={2}>
              <Grid item sx={gridKeyStyle} xs={3}>
                Nomor HP
              </Grid>
              <Grid item xs={7}>
                <TextField id="no_hp" onChange={handleForm} value={no_hp} onInput={(e: any) => setNoHP(e.target?.value)} type="text" size='small' placeholder='Nomor HP' name='no_hp' required/>
                <InputLabel error>{formik.errors.no_hp}</InputLabel>
              </Grid>
            </Grid>
            <Grid container sx={gridValueStyle} spacing={2}>
              <Grid item sx={gridKeyStyle} xs={3}>
                Password
              </Grid>
              <Grid item xs={7}>
                <TextField id="password" onChange={handleForm} value={password} onInput={(e: any) => setPassword(e.target?.value)} type="password" size='small' placeholder='Password' name='password' required/>
                <InputLabel error>{formik.errors.password}</InputLabel>
              </Grid>
            </Grid>
            <Grid container sx={gridValueStyle} spacing={2}>
              <Grid item sx={gridKeyStyle} xs={3}>
                Confirm Password
              </Grid>
              <Grid item xs={7}>
                <TextField id="confirmPassword" onChange={handleForm} value={confirmPassword} onInput={(e: any) => setConfirmPassword(e.target?.value)} type="password" size='small' placeholder='Confirm Password' name='confirmPassword' required/>
                <InputLabel error>{formik.errors.confirmPassword}</InputLabel>
              </Grid>
            </Grid>
            <Grid container sx={gridValueStyle} spacing={2}>
              <Grid item sx={gridKeyStyle} xs={3}>
                Role {role}
              </Grid>
              <Grid item xs={7}>
                <FormControl sx={{ minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={role}
                    onChange={handleChangeRole}
                    label="Type"
                    size='small'
                    name='role'
                    required
                  >
                    <MenuItem value='A'>Admin</MenuItem>
                    <MenuItem value='PJ'>PJ Proyek</MenuItem>
                    <MenuItem value='P'>Pegawai</MenuItem>
                    <MenuItem value='MP'>Member Proyek</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container sx={gridValueStyle} spacing={2}>
              <Grid item sx={gridKeyStyle} xs={3}>
                Status
              </Grid>
              <Grid item xs={7}>
                <FormControl sx={{ minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={status}
                    onChange={handleChangeStatus}
                    label="Type"
                    size='small'
                    name='status'
                    required
                  >
                    <MenuItem value='A'>Active</MenuItem>
                    <MenuItem value='I'>InActive</MenuItem>
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
                <Button variant="outlined" color="primary" sx={{ marginTop: '2em' }} onClick={() => { handleClose(); clearForm(); }}>
                  Close
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button type='submit' variant="contained" color="primary" sx={{ marginTop: '2em' }}>
                  Save
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
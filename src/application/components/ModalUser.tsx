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
    Select,
    SelectChangeEvent
} from '@mui/material'

interface ModalProps {
    open: boolean;
    handleClose: () => void;
}
const ModalUser: React.FC<ModalProps> = ({ open, handleClose }) => {
    const [nip, setNip] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nomorHP, setNomorHP] = useState('')
    const [role, setRole] = useState('')
    const [status, setStatus] = useState('')
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
                            Manage Account
                        </Typography>
                    </Box>
                    <Box sx={bodyBox}>
                        <Grid container sx={gridValueStyle} spacing={2}>
                            <Grid item sx={gridKeyStyle} xs={3}>
                                NIP
                            </Grid>
                            <Grid item xs={7}>
                                <TextField id="nip" value={nip} onInput={(e: any) => setNip(e.target?.value)} type="text" size='small' placeholder='NIP' />
                            </Grid>
                        </Grid>
                        <Grid container sx={gridValueStyle} spacing={2}>
                            <Grid item sx={gridKeyStyle} xs={3}>
                                Name
                            </Grid>
                            <Grid item xs={7}>
                                <TextField id="name" value={name} onInput={(e: any) => setName(e.target?.value)} type="text" size='small' placeholder='Name' />
                            </Grid>
                        </Grid>
                        <Grid container sx={gridValueStyle} spacing={2}>
                            <Grid item sx={gridKeyStyle} xs={3}>
                                Email
                            </Grid>
                            <Grid item xs={7}>
                                <TextField id="email" value={email} onInput={(e: any) => setEmail(e.target?.value)} type="text" size='small' placeholder='Email' />
                            </Grid>
                        </Grid>
                        <Grid container sx={gridValueStyle} spacing={2}>
                            <Grid item sx={gridKeyStyle} xs={3}>
                                Nomor HP
                            </Grid>
                            <Grid item xs={7}>
                                <TextField id="nomorHP" value={nomorHP} onInput={(e: any) => setNomorHP(e.target?.value)} type="text" size='small' placeholder='Nomor HP' />
                            </Grid>
                        </Grid>
                        <Grid container sx={gridValueStyle} spacing={2}>
                            <Grid item sx={gridKeyStyle} xs={3}>
                                Role
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
                                    >
                                        <MenuItem value='Admin'>Admin</MenuItem>
                                        <MenuItem value='PJ Proyek'>PJ Proyek</MenuItem>
                                        <MenuItem value='Karyawan'>Karyawan</MenuItem>
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

export default ModalUser
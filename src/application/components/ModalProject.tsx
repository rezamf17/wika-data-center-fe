import React, { useState } from 'react'
import { Grid, Button, Modal, Box, Typography, TextField } from '@mui/material'
import '../../assets/css/Modal.css'
import UploadImage from './UploadImage';

interface ModalProps {
    open: boolean;
    handleClose: () => void;
}

const ModalProject: React.FC<ModalProps> = ({ open, handleClose }) => {

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
                    <Box sx={bodyBox}>
                        <Grid container sx={{width : '60vw'}}>
                            <Grid item xs={7}>
                                <Grid container spacing={5}>
                                    <Grid item xs={5}>Nama Proyek</Grid>
                                    <Grid item xs={7} sx={{padding : '1em'}}><TextField size='small' fullWidth /></Grid>
                                </Grid>
                                <Grid container spacing={5}>
                                    <Grid item xs={5}>Status Proyek</Grid>
                                    <Grid item xs={7} sx={{padding : '1em'}}><TextField size='small' fullWidth /></Grid>
                                </Grid>
                                <Grid container spacing={5}>
                                    <Grid item xs={5}>Deparment</Grid>
                                    <Grid item xs={7} sx={{padding : '1em'}}><TextField size='small' fullWidth /></Grid>
                                </Grid>
                                <Grid container spacing={5}>
                                    <Grid item xs={5}>Tempat Proyek</Grid>
                                    <Grid item xs={7} sx={{padding : '1em'}}><TextField size='small' fullWidth /></Grid>
                                </Grid>
                                <Grid container spacing={5}>
                                    <Grid item xs={5}>Tanggal Berakhir Proyek</Grid>
                                    <Grid item xs={7} sx={{padding : '1em'}}><TextField size='small' fullWidth /></Grid>
                                </Grid>
                                <Grid container spacing={5}>
                                    <Grid item xs={5}>Deskripsi Proyek</Grid>
                                    <Grid item xs={7} sx={{padding : '1em'}}><TextField size='small' /></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5}>
                                <Grid container spacing={5}>
                                    <Grid item xs={5}>Nama Proyek</Grid>
                                    <Grid item xs={5}><TextField size='small' /></Grid>
                                </Grid>
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

export default ModalProject
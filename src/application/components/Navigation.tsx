import React from 'react'
import { 
    Toolbar,
    AppBar,
    Grid,
    Button,
    Modal,
    Typography,
    Box
} from '@mui/material'
import { blue } from '@mui/material/colors';
import logoWika from '../../assets/img/wika-seeklogo.com.png'
import '../../assets/css/Navigation.css'
import {Link} from 'react-router-dom'
const Navigation: React.FC = () => {
    const color = blue[50]
    const [open, setOpen] = React.useState(false);
    const logoutModalOpen = () => setOpen(true);
    const logoutModalClose = () => setOpen(false);
    const label = {
        color : "#020038",
        fontSize: "16px",
        fontWeight: "bold",
        marginTop: "1vh",
    }
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
      };
    return (
        <>
        <AppBar position='static' sx={{ backgroundColor: color }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
            <Grid container spacing={5}>
                <Grid item xs={1}>
                    <img src={logoWika} alt="logo wika" className='image-size'/>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="text" sx={label} component={Link} to='/dashboard'>Dashboard</Button> 
                </Grid>
                <Grid item xs={2}>
                    <Button variant="text" sx={label} component={Link} to='/projects'>Projects</Button> 
                </Grid>
                <Grid item xs={2}>
                    <Button variant="text" sx={label} component={Link} to='/accounts'>Accounts</Button> 
                </Grid>
                <Grid item xs={2}>
                    <Button variant="text" sx={label} component={Link} to='/manage-projects'>Manage Projects</Button> 
                </Grid>
                <Grid item xs={3}>
                    <Button variant="text" sx={label} onClick={logoutModalOpen}>Logout</Button> 
                </Grid>
            </Grid>
            </Toolbar>
            <Modal
                open={open}
                onClose={logoutModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Yakin Ingin Logout ?
                </Typography>
                <Grid container spacing={1} sx={{mt : '1em'}}>
                    <Grid item xs={6}>
                        <Button onClick={logoutModalClose}>Tidak</Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Button onClick={logoutModalClose}  component={Link} to='/' >Ya</Button>
                    </Grid>
                </Grid>
                </Box>
            </Modal>
        </AppBar>
        </>
    )
}

export default Navigation
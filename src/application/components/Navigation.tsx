import React from 'react'
import { 
    Toolbar,
    AppBar,
    Grid,
    Button
} from '@mui/material'
import { blue } from '@mui/material/colors';
import logoWika from '../../assets/img/wika-seeklogo.com.png'
import '../../assets/css/Navigation.css'
import {Link} from 'react-router-dom'
const Navigation: React.FC = () => {
    const color = blue[50]
    const label = {
        color : "#020038",
        fontSize: "16px",
        fontWeight: "bold",
        marginTop: "1vh",
    }
    return (
        <>
        <AppBar position='static' sx={{ backgroundColor: color }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
            <Grid container spacing={5}>
                <Grid item xs={3}>
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
            </Grid>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navigation
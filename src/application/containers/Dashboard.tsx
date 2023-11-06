import React from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import { Container, Card, Grid } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PieChart from '../components/PieChart';
import DashboardCard from '../components/DashboardCard'
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PauseIcon from '@mui/icons-material/Pause';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Dashboard: React.FC = () => {
    return (
        <>
            <Navigation />
            <Container>
                <h1>Dashboard</h1>
                <Breadcrumbs title='Dashboard' icon={<DashboardIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
                <Card sx={{ height: 'auto' }}>
                    <Grid container spacing={1} sx={{margin : '1em'}}>
                        <Grid item xs={4}>
                            <DashboardCard title='Total Data Akun' count={20} icon={<GroupIcon style={{ fontSize: '8rem' }}/>} />
                        </Grid>
                        <Grid item xs={4}>
                            <DashboardCard title='Total Data Admin' count={15} icon={<PersonIcon style={{ fontSize: '8rem' }}/>} />
                        </Grid>
                        <Grid item xs={4}>
                            <DashboardCard title='Total Data Pegawai' count={2} icon={<PersonIcon style={{ fontSize: '8rem' }}/>} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} sx={{margin : '1em'}}>
                        <Grid item xs={4}>
                            <DashboardCard title='Total Data Proyek' count={35} icon={<ApartmentIcon style={{ fontSize: '8rem' }}/>} />
                        </Grid>
                        <Grid item xs={4}>
                            <DashboardCard title='Total Proyek Hold' count={12} icon={<PauseIcon style={{ fontSize: '8rem' }}/>} />
                        </Grid>
                        <Grid item xs={4}>
                            <DashboardCard title='Total Proyek Finish' count={22} icon={<DoneOutlineIcon style={{ fontSize: '8rem' }}/>} />
                        </Grid>
                        <Grid item xs={4}>
                            <DashboardCard title='Total Proyek On-Going' count={4} icon={<PlayArrowIcon style={{ fontSize: '8rem' }}/>} />
                        </Grid>
                    </Grid>
                    <PieChart />
                </Card>
            </Container>
        </>
    )
}

export default Dashboard
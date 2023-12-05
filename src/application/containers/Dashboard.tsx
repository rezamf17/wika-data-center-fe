import React from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import { Container, Card, Grid } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PieChart from '../components/PieChart';
import DonutChart from '../components/DonutChart';
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
                    <Grid container justifyContent="center" style={{ height: '90vh' }}>
                        <Grid item xs={6}>
                            <PieChart />
                        </Grid>
                        <Grid item xs={6}>
                            <DonutChart />
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </>
    )
}

export default Dashboard
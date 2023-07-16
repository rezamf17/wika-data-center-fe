import React from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import {Container, Card} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';

const Dashboard : React.FC = () => {
    return (
        <>
        <Navigation />
        <Container fixed>
            <h1>Dashboard</h1>
        <Breadcrumbs title='Dashboard' icon={<DashboardIcon sx={{ mr: 0.5 }} fontSize="inherit"/>} />
        <Card sx={{height : '60vh'}}>
            <h3>Welcome To Wika Data Center</h3>
        </Card>
        </Container>
        </>
    )
}

export default Dashboard
import React from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import {Container} from '@mui/material'
import ApartmentIcon from '@mui/icons-material/Apartment';

const Projects : React.FC = () => {
    return (
        <>
        <Navigation />
        <Container fixed>
            <h1>Projects</h1>
        <Breadcrumbs title='Projects' icon={<ApartmentIcon sx={{ mr: 0.5 }} fontSize="inherit"/>} />
        </Container>
        </>
    )
}

export default Projects
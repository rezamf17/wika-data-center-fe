import React from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import {Container} from '@mui/material'
import DomainAddIcon from '@mui/icons-material/DomainAdd';

const ManageProjects : React.FC = () => {
    return (
        <>
        <Navigation />
        <Container fixed>
            <h1>Manage Projects</h1>
            <Breadcrumbs title='Manage Projects' icon={<DomainAddIcon sx={{ mr: 0.5 }} fontSize="inherit"/>} />
        </Container>
        </>
    )
}

export default ManageProjects
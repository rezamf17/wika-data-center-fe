import React from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import {Container} from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';

const Accounts : React.FC = () => {
    return (
        <>
        <Navigation />
        <Container fixed>
            <h1>Accounts</h1>
            <Breadcrumbs title='Accounts' icon={<PeopleIcon sx={{ mr: 0.5 }} fontSize="inherit"/>} />
        </Container>
        </>
    )
}

export default Accounts
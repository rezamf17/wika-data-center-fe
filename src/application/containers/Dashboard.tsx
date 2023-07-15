import React from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'

const Dashboard : React.FC = () => {
    return (
        <>
        <Navigation />
        <Breadcrumbs />
        <h1>Dashboard</h1>
        </>
    )
}

export default Dashboard
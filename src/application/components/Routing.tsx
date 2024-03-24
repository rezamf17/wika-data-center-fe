import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../containers/Home'
import Dashboard from '../containers/Dashboard'
import Projects from '../containers/Projects'
import DetailProject from '../containers/DetailProject'
import Accounts from '../containers/Accounts'
import ManageProjects from '../containers/ManageProjects'
import MemberProyek from '../containers/MemberProyek'
import { AnimatePresence } from 'framer-motion'

const Routing:React.FC = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/projects/detail' element={<DetailProject />} />
                <Route path='/manage-projects' element={<ManageProjects />} />
                <Route path='/accounts' element={<Accounts />} />
                <Route path='/project-member' element={<MemberProyek />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Routing
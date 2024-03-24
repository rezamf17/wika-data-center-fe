import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import ApartmentIcon from '@mui/icons-material/Apartment';
import DetailProjectComponent from '../components/DetailProjectComponent';
import {
  Container,
  Card,
  Grid,
  Button,
  Box,
  Stack
} from '@mui/material'
import Carousel from '../components/Carousel';
import { useNavigate } from 'react-router-dom';

const DetailProject: React.FC = () => {

  const back = {
    width : '15%',
    marginLeft : '2em',
    marginTop : '1em'
  }
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/projects')
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.2 }}
      >
        <Navigation />
        <Container fixed>
          <h1>Detail Projects</h1>
          <Breadcrumbs title='Detail Projects' icon={<ApartmentIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
          <Card sx={{ height: 'auto' }}>
            <Carousel />
            <DetailProjectComponent />
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="left"
              spacing={2}
              sx={back}
            >
              <Button variant="outlined" onClick={handleBack}>Back</Button>
              </Stack>
          </Card>
        </Container>
      </motion.div>
    </>
  )
}

export default DetailProject
import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import ApartmentIcon from '@mui/icons-material/Apartment';
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
  const gridStyle = {
    marginLeft: '1em', 
    textAlign : 'left',
    padding : '0.5em'
  }

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
            <Grid container spacing={7} sx={gridStyle}>
              <Grid item xs={5}>
                Nama Proyek
              </Grid>
              <Grid item xs={5}>
                test
              </Grid>
            </Grid>
            <Grid container spacing={7} sx={gridStyle}>
              <Grid item xs={5}>
                Status Proyek
              </Grid>
              <Grid item xs={5}>
                test
              </Grid>
            </Grid>
            <Grid container spacing={7} sx={gridStyle}>
              <Grid item xs={5}>
                Departemen
              </Grid>
              <Grid item xs={5}>
                test
              </Grid>
            </Grid>
            <Grid container spacing={7} sx={gridStyle}>
              <Grid item xs={5}>
                Tempat Proyek
              </Grid>
              <Grid item xs={5}>
                test
              </Grid>
            </Grid>
            <Grid container spacing={7} sx={gridStyle}>
              <Grid item xs={5}>
                Tanggal Mulai Proyek
              </Grid>
              <Grid item xs={5}>
                test
              </Grid>
            </Grid>
            <Grid container spacing={7} sx={gridStyle}>
              <Grid item xs={5}>
                Tanggal Berakhir Proyek
              </Grid>
              <Grid item xs={5}>
                test
              </Grid>
            </Grid>
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
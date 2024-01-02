import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import ApartmentIcon from '@mui/icons-material/Apartment';
import {
  Container,
  Card,
  Grid,
  Button
} from '@mui/material'
import Slider from "react-slick";

const DetailProject: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.2 }}
      >
        <Navigation />
        {/* <Container fixed>
          <h1>Detail Projects</h1>
          <Breadcrumbs title='Detail Projects' icon={<ApartmentIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
          <Card sx={{ height: 'auto' }}> */}
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          {/* </Card>
        </Container> */}
      </motion.div>
    </>
  )
}

export default DetailProject
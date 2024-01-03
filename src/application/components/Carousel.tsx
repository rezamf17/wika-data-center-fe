import React, { useState, useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Slider, { Settings } from 'react-slick'
import {IconButton, Stack } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Carousel: React.FC = () => {

  // const [sliderRef, setSliderRef] = useState<null | string>(null);
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings : Settings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  }
  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const hotelCards = [
    'https://images.unsplash.com/photo-1704026437902-699fa6a8c98d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682686580922-2e594f8bdaa7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1704024213027-c3555991bc63?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1703948057135-8b7b87bac48a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1703897059883-3b0e02522cdc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1683140941523-f1fbbabe54d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]
  return (
    <div className='content'>
      <Stack direction="row" sx={{width : '2em', marginLeft : 'auto', marginRight : '3em'}} spacing={1}>
        <IconButton aria-label="fingerprint" color="primary" onClick={handlePrevClick}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton aria-label="fingerprint" color="primary" onClick={handleNextClick}>
          <ChevronRightIcon />
        </IconButton>
      </Stack>
      <Slider ref={(slider) => sliderRef.current = slider} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index}>
            <img alt={card} src={card} style={{ width: '50%', height: '50%', display: 'block', marginLeft : 'auto', marginRight : 'auto' }}  />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
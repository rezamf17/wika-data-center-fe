import React from "react"
import '../../assets/css/HomeCss.css'
import LoginBox from "../components/LoginBox"
import {ImageList, ImageListItem } from '@mui/material';
import gambar1 from '../../assets/img/Hadjar-Seti-Adji-large-removebg-preview.png'
import gambar2 from '../../assets/img/Adityo-Kusumo-large-removebg-preview.png'
import gambar3 from '../../assets/img/agung-budi-Waskito-large-removebg-preview.png'
import gambar4 from '../../assets/img/Hananto-aji-large-removebg-preview.png'
import gambar5 from '../../assets/img/APR_3557-1-large-removebg-preview.png'
import {motion} from 'framer-motion'


const Home: React.FC = () => {
  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };
    return(
        <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animationVariants}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        >
            <div className="background">
                <div className="container">
                <LoginBox/>
                </div>
            </div>
            <div className="sky-high">
                <div className="container-skyhive">
                    <div className="transparent">
                        <h2>Taman Sari Skyhive</h2>
                        <h4>Jakarta, Indonesia</h4>
                        <p>
                        Tamansari Skyhive Apartment Jakarta merupakan hunian eksklusif persembahan terbaru WIKA Realty bekerja sama dengan Medialand Group yang berada di tengah Jakarta’s Newest Hub – Cawang, Jakarta Timur. Apartemen ini dibangun di atas lahan seluas 5.331 m2 dan memiliki 571 unit yang terdiri dari 3 tipe unit, yaitu tipe studio (25-30 m2), tipe 1 bedroom (38-44 m2), dan tipe 2 bedroom (65-81 m2) dengan harga mulai kisaran Rp 30juta per meter persegi. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="black">
                <div className="container-bottom">
                    <h1>WIKA Great Leader Class</h1>
                    <h2>Learn, follow, and become a great leader</h2>
                    <ImageList sx={{ width: '80vw', height: 450 }} cols={5} rowHeight={164}>
                        <ImageListItem>
                        <img
                            src={gambar1}
                            alt="Gambar"
                            loading="lazy"
                        />
                        <p>Hadjar Seti Adji</p>
                        <p>Director of Human Capital and Development</p>
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={gambar2}
                            alt="Gambar"
                            loading="lazy"
                        />
                        <p>Adityo Kusumo</p>
                        <p>Director of Finance and Risk Management</p>
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={gambar3}
                            alt="Gambar"
                            loading="lazy"
                        />
                        <p>Agung Budi Waskito</p>
                        <p>President Director</p>
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={gambar4}
                            alt="Gambar"
                            loading="lazy"
                        />
                        <p>Hananto Aji</p>
                        <p>Director of Operation I</p>
                        </ImageListItem>
                        <ImageListItem>
                        <img
                            src={gambar5}
                            alt="Gambar"
                            loading="lazy"
                        />
                        <p>Ayu Widya Kiswari</p>
                        <p>Director of Quality, Health, Safety and Environment</p>
                        </ImageListItem>
                    </ImageList>
                </div>
            </div>
        </motion.div>
    )
}

export default Home
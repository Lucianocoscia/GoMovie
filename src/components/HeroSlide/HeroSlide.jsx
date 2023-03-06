import React, {  useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HeroSlide.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import axios from "axios";

import { apiConfig} from "../../config/config";

import toast, { Toaster } from 'react-hot-toast';
//modal
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Trailer from "../ItemDetail/Trailer";
import CloseIcon from '@mui/icons-material/Close';

export default function HeroSlide({typeOF, typeHero }) {

    const [upcomingMovie, setUpcomingMovies] = useState([]);

    useEffect(() => {
      const endpointUpcoming = `${apiConfig.baseURL}${typeOF}/${typeHero}?api_key=${apiConfig.apiKey}&language=en-US`    
      
      axios.get(endpointUpcoming).then((response) => {
        const apiData = response.data;
        setUpcomingMovies(apiData.results);
        // console.log(apiData.results);
      }).catch((error) => {
        console.log(error, 'el heroslide no pude renderizarse');
      toast.error("Hubo un problema con la conexion al servidor, intenta mas tarde" , {style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }})

      })
  
    },[setUpcomingMovies]);

//Modal
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      height:'80%',
      bgcolor: 'black',
      border: '2px solid #000',
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
    };
    const [selectedMovieId, setSelectedMovieId] = useState(null);

  return (
    <>
    <Toaster position="top-center"/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
/*         pagination={{
          clickable: true,
        }} */
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          {
            

            upcomingMovie.map((oneMovie, index)=>{
                    const background = apiConfig.originalImage( oneMovie.backdrop_path ? oneMovie.backdrop_path : oneMovie.poster_path)
                    // 

                return(
                  <>
                  <SwiperSlide key={index}>  
                        <div style={{ backgroundImage: `url(${background})` }}  className="hero-container">

                            <div className="hero-grid">
                                <div data-aos="fade-down" data-aos-duration="1500" className="hero-grid-1">
                                    <h1  className="hero-title">{oneMovie.title || oneMovie.name}</h1>
                                    <h5  className="hero-overview">{oneMovie.overview.substring(0, 200)}...</h5>

                                    <div className="hero-btns-container">
                                            <Link  to={`/detail/${typeOF}/${oneMovie.id}`}  className="btn1">Watch Now</Link>
                                            <button onClick={() => { setSelectedMovieId(oneMovie.id); handleOpen(); }} className="btn1 btn-outline">Watch Trailer</button>
                                    </div>
                                </div>
                                <div className="container-hero-img">
                                    <img data-aos="fade-in" data-aos-duration="2000"  className="hero-img" src={`${apiConfig.w500Image(oneMovie.poster_path)}`} alt="" />
                                </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                  </>
                    
                    
                )
            })
          }
      </Swiper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
          <Box sx={{ ...style}}>
            <CloseIcon className="close-icon" onClick={handleClose}/>
            <Trailer typeCategory={typeOF} ID={selectedMovieId}  /> 
          </Box>
      </Modal>

    </>
  );
}
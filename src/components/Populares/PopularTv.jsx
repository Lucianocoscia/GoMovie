import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import swAlert from "@sweetalert/with-react";

import Item from "../../components/Item/Item";


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PopularTv = () => {

    const [popularTv, setPopularTv] = useState([]);

    useEffect(() => {
      const endPoint = 'https://api.themoviedb.org/3/tv/popular?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US&page=1'

      axios.get(endPoint).then((response) => {
        const apiData = response.data;
        setPopularTv(apiData.results);
        console.log(apiData);
      }).catch((error) => {
        // console.log(error);
        swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
      })
  
    },[setPopularTv])
    
    const typeOfFilm = 'tv'
  return (
    <>
    <Swiper
  
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={4.5}
    navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
    
    {
        popularTv.map((oneMovie, index)=>{
            return(
                <SwiperSlide key={index}>      
                  <Item 
                  typeOfFilm= {typeOfFilm}
                    id= {oneMovie.id}
                    title={oneMovie.title}
                    overview={oneMovie.overview.substring(0, 100)}
                    poster_path={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  />
                </SwiperSlide>
            )

        })
    }

    
    </Swiper>
</>
  )
}

export default PopularTv
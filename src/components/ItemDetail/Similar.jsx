import React from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
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
  

const Similar = () => {

    let { id } = useParams();
    const [similarMovies, setSimilarMovies] = useState([]);
  
      let endpointSimilar = ` https://api.themoviedb.org/3/movie/${id}/similar?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US&page=1`

      
      useEffect(()=>{
          axios.get(endpointSimilar).then((response) => {
            const similarMovie = response.data;
            setSimilarMovies(similarMovie.results);
            console.log(similarMovie);
          }).catch((error) => {
            swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
          })
      
        }, []);

  return (
    <>
    <Swiper
  
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={5.5}
    navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
    
    {
        similarMovies.map((oneMovie, index)=>{
            return(
                <SwiperSlide key={index}>      
                  <Item 
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

export default Similar
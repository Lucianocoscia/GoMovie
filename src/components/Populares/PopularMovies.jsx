import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import swAlert from "@sweetalert/with-react";

import Item from "../../components/Item/Item";

import { apiConfig, category, movieType } from '../../config/config';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
  

const PopularMovies = ({addOrRemoveFromFavs}) => {

    const [popularMovies, setPopularMovies] = useState([]);
  
    const getPopularMovies = () =>{
      const endPoint = `${apiConfig.baseURL}${category.movie}/${movieType.popular}?api_key=${apiConfig.apiKey}&language=en-US&page=2`
      
      axios.get(endPoint).then((response) => {
        const apiData = response.data;
        setPopularMovies(apiData.results);
        // console.log(apiData);
      }).catch((error) => {
        // console.log(error);
        swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
      })
    }


    useEffect(() => {
      getPopularMovies()
  
    },[setPopularMovies])




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
                    popularMovies.map((oneMovie, index)=>{
                        return(
                            <SwiperSlide key={index}>      
                              <Item 
                                addOrRemoveFromFavs= {addOrRemoveFromFavs}
                                category={category.movie}
                                id= {oneMovie.id}
                                title={oneMovie.title}
                                overview={oneMovie.overview.substring(0, 100)}
                                poster_path={`${apiConfig.w500Image(oneMovie.poster_path)}`}
                              />
                            </SwiperSlide>
                        )
            
                    })
                }

                
                </Swiper>
            </>
  )
}

export default PopularMovies  
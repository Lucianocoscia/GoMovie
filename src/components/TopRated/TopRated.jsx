import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

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
import toast, {Toaster} from 'react-hot-toast';


const TopRated = ({addOrRemoveFromFavs}) => {
    const [topRatedMovie, setTopRatedMovies] = useState([]);


    const getTopRatedMovie = () =>{
      const endPoint = `${apiConfig.baseURL}${category.movie}/${movieType.top_rated}?api_key=${apiConfig.apiKey}&language=en-US&page=2`

      axios.get(endPoint).then((response) => {
        const apiData = response.data;
        setTopRatedMovies(apiData.results);
        // console.log(apiData);
      }).catch((error) => {
        // console.log(error);
        // swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
        toast.error('Hubo un problema con la conexion al servidor, intenta mas tarde', {style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }})
      })
    };

    useEffect(() => {
      getTopRatedMovie()
  
    },[setTopRatedMovies])
  return (
<>
            <Toaster position="top-center"/>
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
                breakpoints={{
                  // when window width is >= 300px
                  300: {
                    slidesPerView: 2.5,
                  },
                  // when window width is >= 600px
                  600: {
                    slidesPerView: 3.5,
                  },
                  1023: {
                    slidesPerView: 5.5,
                  },
          }}
                >
                
                {
                    topRatedMovie.map((oneMovie, index)=>{
                        return(
                            <SwiperSlide key={index}>      
                              <Item 
                                category={category.movie}
                                addOrRemoveFromFavs= {addOrRemoveFromFavs}
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

export default TopRated
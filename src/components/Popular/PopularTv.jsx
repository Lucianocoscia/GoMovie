import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

import Item from "../../components/Item/Item";

import { apiConfig, category, tvType } from '../../config/config';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import toast, {Toaster} from 'react-hot-toast'

const PopularTv = ({addOrRemoveFromFavs}) => {

    const [popularTv, setPopularTv] = useState([]);

    const getPopularTvs = () =>{
      const endPoint = `${apiConfig.baseURL}${category.tv}/${tvType.popular}?api_key=${apiConfig.apiKey}&language=en-US&page=1`

      axios.get(endPoint).then((response) => {
        const apiData = response.data;
        setPopularTv(apiData.results);
        // console.log(apiData);
      }).catch((error) => {
        // console.log(error);
        // swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
        toast.error("Hubo un problema con la conexion al servidor, intenta mas tarde" , {style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }});

        
      })
    }

    useEffect(() => {
      getPopularTvs()
  
    },[setPopularTv])
    
  return (
    <> 
    <Toaster position="top-center"/>
    <Swiper
  
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={4.3}
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
                    addOrRemoveFromFavs= {addOrRemoveFromFavs}
                    category={category.tv}
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

export default PopularTv
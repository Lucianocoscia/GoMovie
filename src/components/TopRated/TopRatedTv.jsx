import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

import Item from "../../components/Item/Item";
import { apiConfig, category,  tvType } from '../../config/config';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import toast, {Toaster} from 'react-hot-toast';

const TopRatedTv = ({addOrRemoveFromFavs}) => {

    const [topRatedTv, setTopRatedTv] = useState([]);

    const getTopRatedTv = () =>{
      const endPoint = ` ${apiConfig.baseURL}${category.tv}/${tvType.top_rated}?api_key=${apiConfig.apiKey}&language=en-US&page=1`

      axios.get(endPoint).then((response) => {
        const apiData = response.data;
        setTopRatedTv(apiData.results);
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
  
    }
    useEffect(() => {
      getTopRatedTv()
    },[setTopRatedTv])

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
        topRatedTv.map((oneMovie, index)=>{
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

export default TopRatedTv
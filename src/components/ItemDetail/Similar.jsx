import React from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
import Item from "../../components/Item/Item";

import { apiConfig, category} from '../../config/config'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import toast, {Toaster} from 'react-hot-toast'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
  

const Similar = ({detailID}) => {

    let { id, typeOF } = useParams();
    const [similar, setSimilar] = useState([]);
  

    const getSimilar = () =>{

      let endpointSimilar = ` ${apiConfig.baseURL}${category.movie}/${id}/similar?api_key=${apiConfig.apiKey}&language=en-US&page=1`;
      let endpointSimilarTV = ` ${apiConfig.baseURL}${category.tv}/${id}/similar?api_key=${apiConfig.apiKey}&language=en-US&page=1`;

      if(typeOF === "movie"){
        axios.get(endpointSimilar).then((response) => {
          const similarMovie = response.data;
          setSimilar(similarMovie.results);
          console.log(similarMovie);
        }).catch((error) => {
          // swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
          toast.error("Hubo un problema con la conexion al servidor, intenta mas tarde", {style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          }});
        })
      }else{
        axios.get(endpointSimilarTV).then((response) => {
          const similarMovie = response.data;
          setSimilar(similarMovie.results);
          // console.log(similarMovie);
        }).catch((error) => {
          // swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
          toast.error("Hubo un problema con la conexion al servidor, intenta mas tarde", {style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          }});

        })
      }
    }
    useEffect(()=>{
      getSimilar()
    }, [])
    
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
        similar.map((oneMovie, index)=>{
            return(
                <SwiperSlide key={index}>      
                  <Item 
                    detailID={detailID}
                    category={typeOF}
                    id= {oneMovie.id}
                    title={oneMovie.title}
                    overview={oneMovie.overview.substring(0, 100)}
                    poster_path={apiConfig.w500Image(oneMovie.poster_path)}
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
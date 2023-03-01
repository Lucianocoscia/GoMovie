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
        // swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
      })
  
    },[setUpcomingMovies]);


  return (
    <>
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


                    return(

                        <SwiperSlide key={index}>  
                            <div style={{ backgroundImage: `url(${background})` }}  className="hero-container">

                                <div className="hero-grid">
                                    <div className="hero-grid-1">
                                        <h1 className="hero-title">{oneMovie.title}</h1>
                                        <h5 className="hero-overview">{oneMovie.overview.substring(0, 200)}...</h5>

                                        <div className="hero-btns-container">
                                                <Link  to={`/detail/${typeOF}/${oneMovie.id}`}  className="btn1">Watch Now</Link>
                                                <button className="btn1 btn-outline">Watch Trailer</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <img className="hero-img" src={`${apiConfig.w500Image(oneMovie.poster_path)}`} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
          }
      </Swiper>
    </>
  );
}
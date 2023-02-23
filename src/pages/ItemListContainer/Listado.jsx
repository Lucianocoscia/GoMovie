import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// import Item from "../../components/Item/Item";
import swAlert from "@sweetalert/with-react";
import './Listado.css'
import PopularMovies from "../../components/Populares/PopularMovies";
import HeroSlide from "../../components/HeroSlide/HeroSlide";
import TopRated from "../../components/TopRated/TopRated";
import TopRatedTv from "../../components/TopRated/TopRatedTv";
import PopularTv from "../../components/Populares/PopularTv";

const Listado = ({addOrRemoveFromFavs}) => {
  let token=  sessionStorage.getItem("token");

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    // https://api.themoviedb.org/3/movie/505642/videos?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US
    
    axios.get(endPoint).then((response) => {
      const apiData = response.data;
      setMoviesList(apiData.results);
      // console.log(apiData);
    }).catch((error) => {
      // console.log(error);
      swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
    })
  },[setMoviesList])

  console.log(moviesList);

 
  return (

    <>
      {!token  && <Navigate to='/'/>}
    
      <HeroSlide/>
      
      <div className="mt-5 swiper-movies">
        <h5 className="mt-3">Trending Movies</h5>
        <PopularMovies/>

      </div>
      <div className="swiper-movies">
        <h5>Top Rated Movies</h5>
        <TopRated/>
      </div>

      <div className=" swiper-movies swiper-movies-1">
        <h5>Trending TV</h5>
        <PopularTv/>
      </div>

      <div className="swiper-movies">
        <h5>Top Rated TV</h5>
        <TopRatedTv/>
      </div>

      {/* <div className="grid-list">

        {
          moviesList.map((oneMovie, index)=>{
            return(
              <div key={index} className="">
                <Item 
                  addOrRemoveFromFavs= {addOrRemoveFromFavs}
                  id= {oneMovie.id}
                  title={oneMovie.title}
                  overview={oneMovie.overview.substring(0, 100)}
                  poster_path={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                />
              </div>
            )

          })
        }
      </div> */}
    </>
  );
};

export default Listado; 


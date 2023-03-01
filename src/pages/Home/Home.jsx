import React from "react";
import { Navigate } from "react-router-dom";
import './Home.css'
import PopularMovies from "../../components/Popular/PopularMovies";
import HeroSlide from "../../components/HeroSlide/HeroSlide";
import TopRated from "../../components/TopRated/TopRated";
import TopRatedTv from "../../components/TopRated/TopRatedTv";
import PopularTv from "../../components/Popular/PopularTv";

const Home = ({addOrRemoveFromFavs}) => {
  let token=  sessionStorage.getItem("token");
 
  return (

    <>
      {!token  && <Navigate to='/'/>}
    
      <HeroSlide/>
      
      <div className="mt-5 swiper-movies">
        <h5 className="mt-3">Trending Movies</h5>
        <PopularMovies addOrRemoveFromFavs={addOrRemoveFromFavs}/>

      </div>
      <div className="swiper-movies">
        <h5>Top Rated Movies</h5>
        <TopRated addOrRemoveFromFavs={addOrRemoveFromFavs}/>
      </div>

      <div className=" swiper-movies swiper-movies-1">
        <h5>Trending TV</h5>
        <PopularTv addOrRemoveFromFavs={addOrRemoveFromFavs}/>
      </div>

      <div className="swiper-movies">
        <h5>Top Rated TV</h5>
        <TopRatedTv addOrRemoveFromFavs={addOrRemoveFromFavs}/>
      </div>

      
    </>
  );
};

export default Home; 


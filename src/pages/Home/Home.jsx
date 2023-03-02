import React from "react";
import { /* Navigate, */ Link } from "react-router-dom";
import './Home.css'
import PopularMovies from "../../components/Popular/PopularMovies";
import HeroSlide from "../../components/HeroSlide/HeroSlide";
import TopRated from "../../components/TopRated/TopRated";
import TopRatedTv from "../../components/TopRated/TopRatedTv";
import PopularTv from "../../components/Popular/PopularTv";
// import ViewMore from "../../components/ViewMore/ViewMore";
import { movieType, category } from "../../config/config";


const Home = ({/* contador, handleClick, handleClickLess, */addOrRemoveFromFavs}) => {
  let token=  sessionStorage.getItem("token");
 
  return (

    <>
      {/* {!token  && <Navigate to='/'/>} */}
    
      <HeroSlide typeHero={movieType.upcoming} typeOF={category.movie} />
      
      <div className="mt-5 swiper-movies">
        <div className="container-title-and-link">
          <h5 className="mt-3">Trending Movies</h5>
          <Link className="link-view-more" to={'/movies'}>View More</Link>
          {/* <ViewMore contador={contador} handleClick={handleClick} handleClickLess={handleClickLess} /> */}
        </div>
        <PopularMovies /* contador={contador}  */addOrRemoveFromFavs={addOrRemoveFromFavs}/>

      </div>
      <div className="swiper-movies">
        <div className="container-title-and-link">
          <h5>Top Rated Movies</h5>
          <Link className="link-view-more" to={'/movies'}>View More</Link>
        </div>
        <TopRated addOrRemoveFromFavs={addOrRemoveFromFavs}/>
      </div>

      <div className=" swiper-movies swiper-movies-1">
        <div className="container-title-and-link">
          <h5>Trending TV</h5>
          <Link className="link-view-more" to={'/tvshow'}>View More</Link>
        </div>
        <PopularTv addOrRemoveFromFavs={addOrRemoveFromFavs}/>
      </div>

      <div className="swiper-movies">
        <div className="container-title-and-link">
          <h5>Top Rated TV</h5>
          <Link className="link-view-more" to={'/tvshow'}>View More</Link>
        </div>
        <TopRatedTv addOrRemoveFromFavs={addOrRemoveFromFavs}/>
      </div>

      
    </>
  );
};

export default Home; 


import React from 'react'
import HeroSlide from '../../components/HeroSlide/HeroSlide'
import MoviesList from './MoviesList'
import './Movies.css'
import ViewMore from '../../components/ViewMore/ViewMore'
import { category } from '../../config/config'
import { Navigate } from "react-router-dom";


const Movies = ({ contador, handleClick, handleClickLess , addOrRemoveFromFavs}) => {
  let token=  sessionStorage.getItem("token");

  return (
    <>
      {!token  && <Navigate to='/'/>}

      <HeroSlide/>
      <div className='movies-container'>
        <MoviesList contador={contador}   typeOF={category.movie}  addOrRemoveFromFavs={addOrRemoveFromFavs}/>
      </div>
      <ViewMore contador={contador} handleClickLess={handleClickLess}  handleClick={handleClick}  />

    </>
  )
};

export default Movies;
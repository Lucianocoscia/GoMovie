import React from 'react'
import HeroSlide from '../../components/HeroSlide/HeroSlide'
import Peliculas from './Peliculas'
import './Movies.css'
import ViewMore from '../../components/ViewMore/ViewMore'

import { category } from '../../config/config'
const Movies = ({addOrRemoveFromFavs}) => {
  return (
    <>
      <HeroSlide/>
      <div className='movies-container'>
        <Peliculas typeOF={category.movie}  addOrRemoveFromFavs={addOrRemoveFromFavs}/>
      </div>
      <ViewMore/>

    </>
  )
};

export default Movies;
import React from 'react'
import { Navigate } from "react-router-dom";
import HeroSlide from '../../components/HeroSlide/HeroSlide'
import TvShowList from './TvShowList';
import ViewMore from '../../components/ViewMore/ViewMore'
import { category, tvType } from '../../config/config'


const TvShow = ({contador, handleClick, handleClickLess , addOrRemoveFromFavs}) => {
  let token=  sessionStorage.getItem("token");

  return (
        <>
            {!token  && <Navigate to='/'/>}
            <HeroSlide typeHero={tvType.popular} typeOF={category.tv} />
            <div className='movies-container'>
                <TvShowList contador={contador}   typeOF={category.tv}  addOrRemoveFromFavs={addOrRemoveFromFavs}/>
            </div>
            <ViewMore contador={contador} handleClickLess={handleClickLess}  handleClick={handleClick}  />

        </>
  )
}

export default TvShow
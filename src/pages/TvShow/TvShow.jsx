import React, {useEffect} from 'react'
// import { Navigate } from "react-router-dom";
import HeroSlide from '../../components/HeroSlide/HeroSlide'
import TvShowList from './TvShowList';
import ViewMore from '../../components/ViewMore/ViewMore'
import { category, tvType } from '../../config/config'


const TvShow = ({contador, handleClick, handleClickLess , addOrRemoveFromFavs}) => {
  let token=  sessionStorage.getItem("token");
  useEffect(()=>{
    window.scrollTo(0,0)
    }
  , [])
  return (
        <>
            {/* {!token  && <Navigate to='/'/>}s */}
            <HeroSlide typeHero={tvType.popular} typeOF={category.tv} />
            <div className='movies-container'>
                <TvShowList contador={contador}   typeOF={category.tv}  addOrRemoveFromFavs={addOrRemoveFromFavs}/>
            </div>
            <ViewMore contador={contador} handleClickLess={handleClickLess}  handleClick={handleClick}  />

        </>
  )
}

export default TvShow
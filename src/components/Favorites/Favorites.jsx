// import React from 'react'
import Item from '../Item/Item';
import { Navigate,useParams } from "react-router-dom";
import { useEffect } from 'react';
import './Favorites.css'
import { category } from '../../config/config';

const Favorites = ({favorites, addOrRemoveFromFavs}) => {
  let token=  sessionStorage.getItem("token");
  useEffect(()=>{
    window.scrollTo(0,0)
    }
  , [])

  return (
    <>  
      {/* {!token  && <Navigate to='/'/>} */}

        <div className='grid-list-results-favorites'>
          { !favorites.length && <div className=' text-danger'>No tenes nada en favoritos</div> }    
          {   
              favorites.map((oneFavorite, index)=>{
                return(
                  <div key={index} className="">
                    <Item 
                      addOrRemoveFromFavs= {addOrRemoveFromFavs}
                      poster_path={oneFavorite.imgUrl}
                      category={oneFavorite.category}
                      id= {oneFavorite.dataMovieID}
                    />
                  </div>
                )
              })
            }
        </div>
    </>
    
  )
}

export default Favorites
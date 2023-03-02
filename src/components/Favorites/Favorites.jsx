// import React from 'react'
import Item from '../Item/Item';
import { Navigate } from "react-router-dom";
import './Favorites.css'

const Favorites = ({favorites, addOrRemoveFromFavs}) => {
  let token=  sessionStorage.getItem("token");

  return (
    <>  
      {!token  && <Navigate to='/'/>}

        <div className='grid-list-results-favorites'>
        { !favorites.length && <div className=' text-danger'>No tenes nada en favoritos</div> }    
        {   
            favorites.map((oneFavorite, index)=>{
              return(
                <div key={index} className="">
                  <Item 
                    addOrRemoveFromFavs= {addOrRemoveFromFavs}
                    poster_path={oneFavorite.imgUrl}
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
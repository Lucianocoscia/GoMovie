// import React from 'react'
import Item from '../Item/Item';
import { Navigate } from "react-router-dom";


const Favoritos = ({favorites, addOrRemoveFromFavs}) => {
  let token=  sessionStorage.getItem("token");

  return (
    <>  
      {!token  && <Navigate to='/'/>}

        <div className='grid-list'>
        { !favorites.length && <div className=' text-danger'>No tenes nada en favoritos</div> }    
        {   
            favorites.map((oneFavorite, index)=>{
              return(
                <div key={index} className="">
                  <Item 
                    addOrRemoveFromFavs= {addOrRemoveFromFavs}
                    id= {oneFavorite.dataMovieID}
                    // title={oneFavorite.title}
                    // overview={oneFavorite.overview.substring(0, 100)}
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

export default Favoritos
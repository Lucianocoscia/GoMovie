import React from 'react'
import {  useEffect , useState } from 'react';
import '../../pages/ItemDetailContainer/ItemDetail.css';

const ItemDetail = ({movie}) => {

  const [loader, setLoader] = useState(true); 
  useEffect (() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000)
  });

  if(loader){
    return(
        <>
          <div className="loader"></div>

        </>
    )
  }else{
    return (
    <>
        <div>
            <h2>Titulo: {movie.original_title} </h2>
            <div className='row'>
                <div className='col-4'>
                    <img className='img-fluid' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                </div>
                <div className='col-8'>
                        <h5>Fecha de estreno: {movie.release_date} </h5>
                        <h5>Rating: {movie.vote_average}</h5>
                        <h5>Resenia: </h5>
                        <p>{movie.overview}</p>
                        <h2>Generos: </h2>
                        <ul>
                            {movie.genres.map(oneGenre =>
                                <li key={oneGenre.id }> {oneGenre.name}</li>)
                            }
                        </ul>
                </div>
            </div>
            
        </div>
    </>
  )
  }

}

export default ItemDetail
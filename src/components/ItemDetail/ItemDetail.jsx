import React from 'react'
import {  useEffect , useState } from 'react';
import '../../pages/ItemDetailContainer/ItemDetail.css';
import Trailer from './Trailer';
import Casts from './Casts';
import Similar from './Similar';

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
        <div className='container-loader container'>
          <div className="loader"></div>

        </div>
        </>
    )
    }else{

      return (
      <>
          <div  className='background-detail'><img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" /></div>

          <section className='detail-container container'>

            <div className='grid-container'>

              <div className='detail-poster-container'><img className='detail-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title}  /></div>

              <div className='flex-info-detail'>
                <h1 className='detail-title'> {movie.original_title}</h1>
                <div >{movie.genres.map(oneGenre =>
                                <button className='detail-button-genre' key={oneGenre.id }> {oneGenre.name}</button>)
                            }</div>
                <p className='detail-overview'>{movie.overview}</p>

                
                <div>
                  <h3 >Casts</h3>
                  <div className='grid-casts'>
                    <Casts/>
                  </div>
                  
                  
                </div>
              </div>
            </div> 
          </section>

          <section className='container'>
              <Trailer /> 
          </section>
          <section className='container mb-5' >
            <div>
              <h5>Similar</h5>
              <Similar />
            </div>
          </section>
      </>
    )
    }

}

export default ItemDetail

            {/* <h2>Titulo: {movie.original_title} </h2>
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
            </div> */}
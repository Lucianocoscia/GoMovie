import React from 'react'
import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect} from 'react';
import swAlert from "@sweetalert/with-react";
import Item from '../Item/Item';
import axios from "axios";


const Resultados = () => {

  let {keyword} = useParams();

  const [ moviesResults, setMoviesResults] = useState([]);

  const endPointMovie = `https://api.themoviedb.org/3/search/movie?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US&page=1&include_adult=false&query=${keyword}`

  useEffect(()=>{
    axios.get(endPointMovie).then((response) => {
      const moviesDataSearch = response.data.results;
      if(moviesDataSearch.length === 0) {
        swAlert("Oops", "Hubo un problema, no hemos encontrado nada con ese nombre", "error");
      }
      setMoviesResults(moviesDataSearch);
      console.log(moviesDataSearch);
    }).catch((error) => {
      // console.log(error);
      swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");

    })

  }, [keyword]);
  let token=  sessionStorage.getItem("token");

  return (
        <>
      {!token  && <Navigate to='/'/>}

        {moviesResults.length === 0 && <h1>No hay resultados</h1> }
        <div>Buscaste: <em>{keyword}</em></div>
        <div className='grid-list-results'>
        
            {moviesResults.map((movieSearch, index)=>{
                return(
                    <div key={index} className="">
         
                        <Item 
                        id= {movieSearch.id}
                        title={movieSearch.title}
                        overview={movieSearch.overview.substring(0, 100)}
                        poster_path={`https://image.tmdb.org/t/p/w500/${movieSearch.poster_path}`}
                        />
                    </div>
                )
            })}
        </div>

        

        </>
  )
}

export default Resultados
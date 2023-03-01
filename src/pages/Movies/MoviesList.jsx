import React from 'react'
import { useState, useEffect} from 'react';
import Item from '../../components/Item/Item';
import axios from "axios";
import { apiConfig, category,  } from '../../config/config'


const MoviesList = ({ contador, typeOF, addOrRemoveFromFavs}) => {
    const [moviesList, setMoviesList] = useState([]);

    const getMovieList = () =>{
      const endPoint = `${apiConfig.baseURL}discover/${category.movie}?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${contador}&with_watch_monetization_types=flatrate`
      
      axios.get(endPoint).then((response) => {
        const apiData = response.data;
        if(contador === 1){
          setMoviesList(apiData.results);
        } else{
          setMoviesList(apiData.results);
        }
      }).catch((error) => {
        // console.log(error);
        // swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
      })
    };

    useEffect(() => {
      getMovieList()
    },[contador])

  return (
    <>

            <div   className="grid-list-results">
                {
                    moviesList.map((oneMovie, index)=>{
                        return(
                            <div key={index} className="">
                            <Item 
                                category={typeOF}
                                addOrRemoveFromFavs={addOrRemoveFromFavs}
                                id= {oneMovie.id}
                                title={oneMovie.title}
                                overview={oneMovie.overview.substring(0, 100)}
                                poster_path={`${apiConfig.w500Image(oneMovie.poster_path)}`}
                            />
                            </div>
                        )
                    })
                }
            </div> 
            
    </>
  )
}

export default MoviesList
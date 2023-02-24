import React from 'react';
import './Buscador.css';
import swAlert from "@sweetalert/with-react";
import {Navigate } from "react-router-dom";
import { useState, useEffect} from 'react';
import Item from '../../components/Item/Item';
import axios from "axios";


const Buscador = () => {

    const [keywordValue, setKeyword] = useState('');

    const submitHandler = e =>{
        e.preventDefault();
        let keyword = e.currentTarget.value.toLowerCase();
        if(e.key === 'Enter'){
            if(keyword.trim().length === 0 ){
                swAlert("Oops", "Los campos no pueden estar vacios", "error");
            }else if( keyword.length < 4){
                swAlert("Oops", "Debes ingresar mas de 4 caracteres", "error");
            }else{
                e.currentTarget.value = "";
            }
            console.log(keyword);
            setKeyword(keyword) 
        }
    }


    //traigo toda la lista de peliculas
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    
    axios.get(endPoint).then((response) => {
        const apiData = response.data;
        setMoviesList(apiData.results);
    }).catch((error) => {
        swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
    })
    },[setMoviesList])

    //traigo soolo lo relacionado a lo q buscaron
    const [ moviesResults, setMoviesResults] = useState([]);

    useEffect(()=>{
    const endPointMovie = `https://api.themoviedb.org/3/search/movie?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US&page=1&include_adult=false&query=${keywordValue}`;

    axios.get(endPointMovie).then((response) => {
        const moviesDataSearch = response.data.results;
        setMoviesResults(moviesDataSearch);
    }).catch((error) => {
        swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
    })

    }, [keywordValue]);

    let token=  sessionStorage.getItem("token");


  return (
        <>
            {!token  && <Navigate to='/'/>}

            <div className='search-container'>

                <div className="group container">
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                    <input id= "Buscador" onKeyUpCapture={submitHandler}  placeholder="Que estas buscando?" name='keyword' type="search" className="input"/>
                </div>
                
                    {keywordValue === ""  ?
                        (
                            <>
                                <div className="grid-list-results">
                                    {
                                        moviesList.map((oneMovie, index)=>{
                                            return(
                                                <div key={index} className="">
                                                <Item 
                                                    
                                                    id= {oneMovie.id}
                                                    title={oneMovie.title}
                                                    overview={oneMovie.overview.substring(0, 100)}
                                                    poster_path={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                                                />
                                                </div>
                                            )
                                        })
                                    }
                                </div> 
                            </>
                        )
                    :
                
                    <>
                        {moviesResults.length === 0 && <h1>No hay resultados</h1> }
                        <div className='p-3'>Buscaste: <em>{keywordValue}</em></div>

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
                    }
            </div>
        </>
  )
}

export default Buscador
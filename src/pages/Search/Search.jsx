import React from 'react';
import './Search.css';

import {Navigate } from "react-router-dom";
import { useState, useEffect} from 'react';
import Item from '../../components/Item/Item';
import axios from "axios";
import ViewMore from '../../components/ViewMore/ViewMore';
import MoviesList from '../Movies/MoviesList';
import { apiConfig, category } from '../../config/config';

import toast, {Toaster} from 'react-hot-toast';

const Search = ({ contador, handleClick, handleClickLess, addOrRemoveFromFavs}) => {

    const [keywordValue, setKeyword] = useState('');
    
    const submitHandler = e =>{
        e.preventDefault();
        let keyword = e.currentTarget.value.toLowerCase();
        if(e.key === 'Enter'){
            if(keyword.trim().length === 0 ){
                toast.error('Debes ingresar mas de 4 caracteres' , {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  }})
            }else if( keyword.length < 4){
                toast.error('Debes ingresar mas de 4 caracteres', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  }})
            }else{
                e.currentTarget.value = "";
            }
            setKeyword(keyword) 
        }
    }
    // console.log(keyword);
  
    //traigo soolo lo relacionado a lo q buscaron
    const [ searchResults, setResults] = useState([]);

    const search = (keywordValue) =>{

        const endPointSearch =  `${apiConfig.baseURL}search/multi?api_key=${apiConfig.apiKey}&language=en-US&page=${contador}&include_adult=false&query=${keywordValue}`;
  
        axios.get(endPointSearch).then((response) => {
            const DataSearch = response.data;
            setResults(DataSearch.results);
        }).catch((error) => {
            toast.error('Hubo un problema con la conexion al servidor, intenta mas tarde', {style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              }})
        })
        console.log(searchResults)
    }
    


    useEffect(()=>{
        search(keywordValue)
        window.scrollTo(0, 0);
    }, [keywordValue, contador]);

    let token=  sessionStorage.getItem("token");


  return (
        <>
        <Toaster position="top-center"/>
            {!token  && <Navigate to='/'/>}

            <div className='search-container'>

                <div className="group container">
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                    <input id= "Buscador" onKeyUpCapture={submitHandler}  placeholder="Que estas buscando?" name='keyword' type="search" className="input"/>
                </div>
                
                    {keywordValue === ""  ?
                        (
                            <>
                                <MoviesList  contador={contador} typeOF={category.movie} addOrRemoveFromFavs={addOrRemoveFromFavs} />
                            </>
                        )
                    :
                
                    <>
                        {searchResults.length === 0 && <h1>No hay resultados</h1> }
                        <div className='p-3'>Buscaste: <em>{keywordValue}</em></div>

                        <div className='grid-list-results'>
                            {searchResults.map((movieSearch, index)=>{
                                return(
                                    <div key={index} className="">
                        
                                        <Item 
                                            addOrRemoveFromFavs={addOrRemoveFromFavs}
                                            category={movieSearch.media_type}
                                            id= {movieSearch.id}
                                            title={movieSearch.title}
                                            poster_path={`${apiConfig.w500Image(movieSearch.poster_path)}`}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </>
                    }
            </div>
            <ViewMore  contador={contador} handleClick={handleClick} handleClickLess={handleClickLess}   />
        </>
  )
}

export default Search


    // const loadMore = () =>{
    //     let params = (new URL('https://api.themoviedb.org/3/discover/movie?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')).searchParams;
    //     let page = params.get("page");
    //     console.log(page);

    //     if(page ){

    //     } else{
    //         let endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
            
    //     }
    // }
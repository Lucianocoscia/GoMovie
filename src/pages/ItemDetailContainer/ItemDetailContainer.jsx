import React from 'react'
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import swAlert from "@sweetalert/with-react";
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import './ItemDetail.css'
const ItemDetailContainer = () => {
  let token = sessionStorage.getItem('token');

  let { id } = useParams();
  //tengo q buscar de la url la palabra movie o tv y apartir de eso hacer un if q haga el get hacia el endpoint de movies o de tv

  const [movieID, setMovieId] = useState([]);

  let endPointID = `https://api.themoviedb.org/3/movie/${id}?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US`
  let endPointTVID = `https://api.themoviedb.org/3/tv/${id}?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US`

  useEffect(()=>{
    axios.get(endPointID  ).then((response) => {
      const movieDataID = response.data;
      setMovieId(movieDataID);
      // console.log(movieDataID);
    }).catch((error) => {
      // console.log(error);
      swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");

    })

  }, [setMovieId]);
     console.log('aca tengo guardado en el state la pelicula deseada',movieID)

  return (
    <>
     {!token  && <Navigate to='/'/>}
     <div className='detail-container'>

        <ItemDetail movie = {movieID} />
 
      </div>
    </>
    
  )
}

export default ItemDetailContainer
import React from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
import swAlert from "@sweetalert/with-react";
import '../../pages/ItemDetailContainer/ItemDetail.css';

const Casts = () => {

    let { id } = useParams();
    const [casts, setCasts] = useState([]);
  
      let endPointVideos = ` https://api.themoviedb.org/3/movie/${id}/credits?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US
      `
      useEffect(()=>{
          axios.get(endPointVideos).then((response) => {
            const videoData = response.data;
            setCasts(videoData.cast.slice(0,4));
            console.log(videoData.cast.slice(0,5));
          }).catch((error) => {
            swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
          })
      
        }, []);

  return (
    <>
            {
            casts.map((cast, i)=> (
                
                    <img className='img-casts' key={i} src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}></img> 
                  
            ))
        }
    </>
  )
}

export default Casts
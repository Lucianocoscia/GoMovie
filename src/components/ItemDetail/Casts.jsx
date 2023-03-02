import React from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
import '../../pages/ItemDetailContainer/ItemDetail.css';
import { apiConfig, category} from '../../config/config'
import toast, { Toaster } from 'react-hot-toast';

const Casts = () => {

    let { id, typeOF } = useParams();
    const [casts, setCasts] = useState([]);

    const getCast = () =>{
      let endPointVideos = `${apiConfig.baseURL}${category.movie}/${id}/credits?api_key=${apiConfig.apiKey}&language=en-US`;
      let endPointVideosTV = `${apiConfig.baseURL}${category.tv}/${id}/credits?api_key=${apiConfig.apiKey}&language=en-US`;

      if(typeOF === "movie"){
        axios.get(endPointVideos).then((response) => {
          const videoData = response.data;
          setCasts(videoData.cast.slice(0,4));
          // console.log(videoData.cast.slice(0,5));
        }).catch((error) => {
          // swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");

        })
      } else{
        axios.get(endPointVideosTV).then((response) => {
          const videoData = response.data;
          setCasts(videoData.cast.slice(0,4));
          // console.log(videoData.cast.slice(0,5));
        }).catch((error) => {
          // swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
          toast.error("Hubo un problema con la conexion al servidor, intenta mas tarde")
        })
      }
    }



      
      useEffect(()=>{
        getCast()
        }, []);

  return (
    <>
    <Toaster position="top-center"/>
            {
            casts.map((cast, i)=> (
                
                    <img className='img-casts' key={i} src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}></img> 
                  
            ))
        }
    </>
  )
}

export default Casts
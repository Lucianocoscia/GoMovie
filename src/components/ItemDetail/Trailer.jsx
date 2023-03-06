import React from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
import '../../pages/ItemDetailContainer/ItemDetail.css'

import { apiConfig, category } from '../../config/config'

import toast, {Toaster} from 'react-hot-toast'

const Trailer = ({typeCategory, ID}) => {
  let { id, typeOF } = useParams();
  const [Video, setVideo] = useState([]);

  const getTrailer = () =>{

    let endPointVideos = ` ${apiConfig.baseURL}${typeCategory}/${id || ID}/videos?api_key=${apiConfig.apiKey}&language=en-US`;
    let endPointVideosTV = ` ${apiConfig.baseURL}${typeCategory}/${id || ID}/videos?api_key=${apiConfig.apiKey}&language=en-US`;

    if(typeOF === "movie"){

      axios.get(endPointVideos).then((response) => {
        const videoData = response.data;
        if(videoData){
          const trailer = videoData.results.find((video) => video.name === "Official Trailer");
          setVideo( trailer ? trailer : videoData.results.slice(0, 1))
        }
      }).catch((error) => {
        toast.error('Hubo un problema con la conexion al servidor, intenta mas tarde ', {style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }})
      })
    }else {
      axios.get(endPointVideosTV).then((response) => {
        const videoData = response.data;
        if(videoData){
          const trailer = videoData.results.find((video) => video.name === "Official Trailer");
          setVideo( trailer ? trailer : videoData.slice(0, 1))
        }
        console.log(videoData);
      }).catch((error) => {
        toast.error('Lo sentimos, no encontramos un trailer para esta pelicula' , {style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }})
      })
    }
  }
  useEffect(()=>{
    getTrailer()
  }, [setVideo]);

  return (
    <>
      <Toaster position="top-center"/>
      <div className='trailer-container'>
          {/* <h5>International Trailer</h5> */}
          <iframe key={Video.i} className='iframe-trailer' src={`https://www.youtube.com/embed/${Video.key}`} ></iframe>

      </div>
    </>

  )
}

export default Trailer


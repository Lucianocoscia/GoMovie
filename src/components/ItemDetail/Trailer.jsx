import React from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
// import swAlert from "@sweetalert/with-react";
import '../../pages/ItemDetailContainer/ItemDetail.css'

import { apiConfig, category } from '../../config/config'

const Trailer = () => {
  let { id, typeOF } = useParams();
  const [Video, setVideo] = useState([]);

  const getTrailer = () =>{

    let endPointVideos = ` ${apiConfig.baseURL}${category.movie}/${id}/videos?api_key=${apiConfig.apiKey}&language=en-US`;
    let endPointVideosTV = ` ${apiConfig.baseURL}${category.tv}/${id}/videos?api_key=${apiConfig.apiKey}&language=en-US`;

    if(typeOF === "movie"){

      axios.get(endPointVideos).then((response) => {
        const videoData = response.data;
        if(videoData){
          const trailer = videoData.results.find((video) => video.name === "Official Trailer");
          setVideo( trailer ? trailer : videoData.results.slice(0, 1))
        }
      }).catch((error) => {
        // swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
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
        // swAlert("Oops", "No encontramos un trailer para este film", "error");
      })
    }
  }
  useEffect(()=>{
    getTrailer()
  }, [setVideo]);

  return (
    <div className='trailer-container'>
        <h5>International Trailer</h5>
        <iframe key={Video.i} className='iframe-trailer' src={`https://www.youtube.com/embed/${Video.key}`} ></iframe>

    </div>
  )
}

export default Trailer


import React from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
import swAlert from "@sweetalert/with-react";
import '../../pages/ItemDetailContainer/ItemDetail.css'


const Trailer = () => {
  let { id } = useParams();
  const [movieVideo, setMovieVideo] = useState([]);

    let endPointVideos = ` https://api.themoviedb.org/3/movie/${id}/videos?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US`
   
    useEffect(()=>{
        axios.get(endPointVideos).then((response) => {
          const videoData = response.data;
          setMovieVideo(videoData.results.slice(0, 1));
          console.log(videoData.results);
        }).catch((error) => {
          swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
        })
    
      }, []);




  return (
    <div className='trailer-container'>
        <h5>International Trailer</h5>
        {
          movieVideo.map((video, i) => (
            <iframe key={i} className='iframe-trailer' src={`https://www.youtube.com/embed/${video.key}`} ></iframe>
          ))
        } 
    </div>
  )
}

export default Trailer


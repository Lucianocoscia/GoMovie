import React from 'react'
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import swAlert from "@sweetalert/with-react";
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import './ItemDetail.css'

import { apiConfig, category } from '../../config/config';

const ItemDetailContainer = () => {
  let token = sessionStorage.getItem('token');

  let {  typeOF, id  } = useParams();

  const [detailID, setDetailId] = useState([]);

  const getDetail = () =>{
    
    let endPointID = `${apiConfig.baseURL}${category.movie}/${id}?api_key=${apiConfig.apiKey}&language=en-US`;
    let endPointTVID = `${apiConfig.baseURL}${category.tv}/${id}?api_key=${apiConfig.apiKey}&language=en-US`;

    if(typeOF === 'movie'){
      axios.get(endPointID ).then((response) => {
        const movieDataID = response.data;
        setDetailId(movieDataID);
        console.log(movieDataID);
      }).catch((error) => {
        // console.log(error);
        swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
  
      })
    } else{
      axios.get(endPointTVID ).then((response) => {
        const movieDataID = response.data;
        setDetailId(movieDataID);
        // console.log(movieDataID);
      }).catch((error) => {
        // console.log(error);
        swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
      })
  }}

  useEffect(()=>{
    getDetail()
    window.scrollTo(0,0)
    }
  , [setDetailId])

  return (
    <>
     {!token  && <Navigate to='/'/>} 
      <ItemDetail  detailID = {detailID} />
    </>
    
  )
}

export default ItemDetailContainer
import React from 'react'
// import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import './ItemDetail.css'

import { apiConfig, category } from '../../config/config';

import toast, {Toaster} from 'react-hot-toast';

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
        toast.error('Hubo un problema con la conexion al servidor, intenta mas tarde', {style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }})
  
      })
    } else{
      axios.get(endPointTVID ).then((response) => {
        const movieDataID = response.data;
        setDetailId(movieDataID);
        // console.log(movieDataID);
      }).catch((error) => {
        // console.log(error);
        toast.error('Hubo un problema con la conexion al servidor, intenta mas tarde', {style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }})
      })
  }}

  useEffect(()=>{
    getDetail()
    window.scrollTo(0,0)
    }
  , [setDetailId])

  return (
    <>
    <Toaster position="top-center"/>
     {/* {!token  && <Navigate to='/'/>}  */}
      <ItemDetail  detailID = {detailID} />
    </>
    
  )
}

export default ItemDetailContainer
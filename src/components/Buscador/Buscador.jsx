import React from 'react';
import './Buscador.css';
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
const Buscador = () => {
    const navigate = useNavigate();

    const submitHandler = e =>{
        e.preventDefault();
        const keyword = e.currentTarget.value.toLowerCase().trim();

        if(e.key === 'Enter'){

            console.log(keyword);

            if(keyword.trim().length === 0 ){
                swAlert("Oops", "Los campos no pueden estar vacios", "error");
            }else if( keyword.length < 4){
                swAlert("Oops", "Debes ingresar mas de 4 caracteres", "error");
            }else{
                e.currentTarget.value = "";
                // navigate(`/resultados?keyword=${keyword}`);
                navigate(`/resultados/${keyword}`);

            }


        }
    }

  return (
        <>
            <IconButton className="search-icon" size="large" aria-label="search" color="inherit">
                <SearchIcon />
            </IconButton>
            {/* <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input id= "Buscador" onKeyUpCapture={submitHandler} placeholder="Search" name='keyword' type="search" className="input"/>
            </div> */}
        </>
  )
}

export default Buscador
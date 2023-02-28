import React from 'react'
import './ViewMore.css'
import { apiConfig } from '../../config/config';
import swAlert from "@sweetalert/with-react";
import axios from "axios";



const ViewMore = ({nextPage}) => {

  return (
    <>
        <div className='btn-container'>
            <button onClick={nextPage}  className='button-view-more'> View More</button>

        </div>
    </>
  )
}

export default ViewMore
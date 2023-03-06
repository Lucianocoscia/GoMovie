import React from 'react'
import './Footer.css'
// import { useEffect, useState } from 'react';
import Logo from './GoMovie-icon-left-official.png'

const Footer = () => {
  //logica para obtener la url y pasarla como parametro


  return (
            <>
             <footer >
                  <div className='container-grid'>
                  <img className='logo-footer' src={Logo}/>
                      <div className='grid-footer'>

                        <div>
                          <div className='links-container'>
                            <a href="">Home</a>
                            <a href="">Contact Us</a>
                            <a href="">Term of Services</a>
                            <a href="">About Us</a>
                          </div>
                        </div>

                        <div>              
                          <div className='links-container'>
                            <a href="">Live</a>
                            <a href="">FAQ</a>
                            <a href="">Premium</a>
                            <a href="">Privacy policy</a>
                          </div>
                        </div>

                        <div>
                          <div className='links-container'>
                            <a href="">You must watch</a>
                            <a href="">Recent release</a>
                            <a href="">Top IMDB</a>
                          </div>
                        </div>

                      </div>
                  </div>
              </footer>      
            </>

  )
}

export default Footer
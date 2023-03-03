import React from 'react'
import { Link } from 'react-router-dom'
import './Income.css'

const Income = () => {

  return (
    <>
          <div className='home'>
            <div className='home-banner'>
              <h1 className='m-2 home-logins-title'>Películas, series ilimitadas y mucho más</h1>
              <p className='m-2 home-logins-parrafo'>Disfruta donde quieras y cuando quieras.</p>
              <div className='contenedor-botones'>
                  <Link  className='contenedor-link-btn' to={'/register'}> <button className="btn1-2">Registrarse</button></Link>
                  <Link  className='contenedor-link-btn' to={'/login'}><button className='btn1 btn-outline'>Iniciar Sesion</button></Link>
              </div>
            </div>
      
          </div>

    
    </>

  );
}

export default Income
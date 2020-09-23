import React, { useState, useEffect } from  'react'
import {Link} from 'react-router-dom'

import './styles.css'

import api from '../../services/api'
import NavBar from '../../components/navBar'


function Home() {
  

  useEffect(() => {
    api.get('connections').then( response => {
       const { total } = response.data;
       console.log(response)

    })
  }, [])

    return(
      <div>
          <header className="header-home">
            <div id="title-home" className="col-lg-12">
                <div className="row">
                  <h1 style={{ marginLeft: "14rem" }}>
                    Consultório
                  </h1>
                </div>
                <div className="row">
                  <h4>Agende já sua consulta</h4>
                </div>
            </div>
          </header>
          <body>
            <div className="col-lg-12">
              <NavBar/>
            </div>
            
            
          </body>
      </div>  
    )
}

export default Home;
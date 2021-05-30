import React, { useEffect, useState } from 'react'
import './Info.css'

function Info({ id }) {

  const [film, setFilm] = useState()

  useEffect(() => {
    if(id){
      fetch(`https://swapi.dev/api/films/${id}/`)
      .then(res => res.json())
      .then(res => setFilm(res))
    }
    
  }, [id])
  
  return (
    <div className="card mt-2 pb-4">
      <img src="https://gamerground.ru/wp-content/uploads/2020/01/sluh-sleduyushhaya-epoha-zvezdnyh-vojn-startuet-v-2021-godu-ee-nachnet-novaya-videoigra.jpg" className="card-img-top" alt="starWars" />
      <div className="card-body text">
        <h5 className="card-title">{film ? film.title : ''}</h5>
        <p className="card-text">{film ? film.opening_crawl : ''}</p>
      </div>
    </div>
  );
}

export default Info;

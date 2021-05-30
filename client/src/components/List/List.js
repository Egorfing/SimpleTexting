import React, { useEffect, useState } from 'react';
import Info from '../Info/Info'
import FormModal from '../FormModal/FormModal'
import Modal from '../Modal/Modal'
import Load from '../Load/Load'

import './List.css'

function List(props) {
  const [films, setFilms] = useState([])
  const [filmId, setFilmId] = useState()
  const [modalActiveForm, setModalActiveForm] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const [modalActiveLoad, setModalActiveLoad] = useState(false)
  const [review, setReview] = useState({})
  
  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then(res => res.json())
      .then(res => {
        setFilms(res.results)
        document.querySelector('li').classList.add('list-group-item-active')
      })
    setFilmId(1)
  }, [])

  function clickHandler(i) {
    setFilmId(i + 1)
    const li = document.querySelectorAll('li')

    for (let j = 0; j < li.length; j++) {
      li[j].classList.remove('list-group-item-active')
    }
    li[i].classList.add('list-group-item-active')
  }
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='d-flex justify-content-center'>
      <div className='d-flex flex-column align-items-center p-1 m-1 mt-2 main'>
        <ul className='list-group'>
          {films.map((el, i) => <li className='list-group-item ps-0' onClick={() => clickHandler(i)} key={el.episode_id}>{el.title}</li>)}
        </ul>
        <button onClick={()=>setModalActiveForm(true)} className='btn btn100 btn-primary'>Select episode</button>
      </div>
      <div>
        <Info id={filmId} />
      </div>
      </div>
      <FormModal id={filmId} activeForm={modalActiveForm} setActiveForm={setModalActiveForm} setActive={setModalActive} setReview={setReview} setActiveLoad={setModalActiveLoad}/>
      <Modal modalActive={modalActive} setActive={setModalActive} review={review}/>
      <Load modalActive={modalActiveLoad}/>
    </div>
  );
}

export default List;

import React, { useEffect, useRef, useState } from 'react';
import './FormModal.css'

function FormModal({ id, activeForm, setActiveForm, setActive, setReview, setActiveLoad }) {

  const [filmTitle, setFilmTitle] = useState()

  const inputName = useRef()
  const inputEmail = useRef()
  const inputReview = useRef()

  useEffect(() => {
    if (id) {
      fetch(`https://swapi.dev/api/films/${id}/`)
        .then(res => res.json())
        .then(res => setFilmTitle(res.title))
    }

  }, [id])
  function formClear() {
    inputName.current.value = ''
    inputEmail.current.value = ''
    inputReview.current.value = ''
    setActiveForm(false)

  }
  function formHandler(e) {
    e.preventDefault()
    setActiveForm(false)
    setActiveLoad(true)
    setReview({
      name: inputName.current.value,
      email: inputEmail.current.value,
      episode: filmTitle,
      review: inputReview.current.value
    })
    setTimeout(() => {
      inputName.current.value = ''
      inputEmail.current.value = ''
      inputReview.current.value = ''
      setActiveLoad(false)
      setActive(true)
    }, 1000)

  }
  return (
    <div className={activeForm ? 'modal1 active1' : 'modal1'} onClick={formClear}>
      <form onClick={e => e.stopPropagation()} onSubmit={formHandler} className='modalForm p-2'>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Your name</label>
          <input ref={inputName} type="text" className="form-control" id="nameInput" placeholder="Ivan" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input ref={inputEmail} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Review on episode: "{filmTitle}" </label>
          <textarea ref={inputReview} className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <button type="button" onClick={formClear} className="btn btn-secondary">cancel</button>
          <button type="submit" className="btn btn-primary ms-2">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormModal;

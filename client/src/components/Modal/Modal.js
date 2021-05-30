import React from 'react';

function Modal({modalActive, setActive, review}) {
  return (
    <div className={modalActive ? 'modal1 active1' : 'modal1'} onClick={() => setActive(false)}>
      <form onClick={e => e.stopPropagation()} className='modalForm p-2'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">{review.episode}  </label>
          <div id="exampleFormControlTextarea1">Review: {review.review}</div>
        </div>
        <div className="mb-3 d-flex flex-column justify-content-end align-items-end">
          <div id='nameInput'> {review.name}</div>
          <div className='ms-2' id="exampleFormControlInput1">{review.email}</div>
        </div>
        <div className='d-flex justify-content-end align-items-center'>
        <button type="button" className="btn btn-primary" onClick={() => setActive(false)}>Ok</button>
        </div>
      </form>
    </div>
  );
}

export default Modal;

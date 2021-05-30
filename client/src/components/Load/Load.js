import React from 'react';
import './Load.css'

function Load({modalActive}) {
  return (
    <div className={modalActive ? 'modal1 active1' : 'modal1'}>
      <div className='load'></div>
    </div>
  );
}

export default Load;

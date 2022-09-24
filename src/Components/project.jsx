import React from 'react';
import '../App.css'
import myImg from "../img/man.png"
import svgImg from '../img/Icon.svg'

function project() {
	return (
    <div className="maiin">
      <div className='main'>
        <div className="text">
          <span className='span'>Вопросы по качеству!</span>
          <br />
          <span className='span'>Свяжитесь с нами!</span>
          <div className="inp">
            <input type="text" placeholder='Электронная почта' className='input'/>
            <button className='svg'><img src={svgImg} alt="" /></button>
          </div>
        </div>
        <div className="img"><img src={myImg} alt="" /></div>
      </div>
    </div>
	);
}

export default project;
import React from 'react';
import fridge from "../img/fridge.png"
import headphone from "../img/headphone.png"
import machine from "../img/machine.png"
import nout from "../img/nout.png"
import phone from "../img/phone.png"
import tv from "../img/tv.png"
import watch from "../img/watch.png"
import Iconm from "../img/Iconm.svg"
import Icons from "../img/Icons.svg"
function Slaider() {
	return (
		<div>
			<div className="wrapper">
				<h1 className='popular'>Популярные котегории</h1>
				<div className="conect">
					<img src={Iconm} alt="" />
					<div className="smart">
						<img src={phone} alt="" />
						<h3>Смартфоны</h3>
					</div>
					<div className="headphone">
						<img src={headphone} alt="" />
						<h3>Наушники</h3>
					</div>
					<div className="nout">
						<img src={nout} alt="" />
						<h3>Ноутбуки</h3>
					</div>
					<div className="tv">
						<img src={tv} alt="" />
						<h3>Телевизоры</h3>
					</div>
					<div className="watch">
						<img src={watch} alt="" />
						<h3>Смарт-часы</h3>
					</div>
					<div className="machine">
						<img src={machine} alt="" />
						<h3>Стиральные машины</h3>
					</div>
					<div className="fridge">
						<img src={fridge} alt="" />
						<h3>Холодильники <br /> и Морозилки</h3>
					</div>
					<img src={Icons} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Slaider;
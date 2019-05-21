import React from 'react'
import './navbar.css'
import message from '../lang/messages'
import img1 from '../../assets/navbar/logo.svg'

export default (props) => (
	<header>
		<nav>
			<div>
				<a href="#a"><img src={img1} alt="Logo de jesús bossa" /></a>
			</div>
			<div>
				<a href="#about">{message[props.lang]['nav.about']}</a>
			</div>
			<div>
				<a href="#experience">{message[props.lang]['nav.exp']}</a>
			</div>
			<div>
				<a href="#studies">{message[props.lang]['nav.edu']}</a>
			</div>
			<div>
				<a href="#contact">{message[props.lang]['nav.contact']}</a>
			</div>
			<div>
				<select onChange={props.change} name="lang" aria-label="lang-changer">
					<option value="en" defaultValue>EN</option>
					<option value="es">ES</option>
				</select>
			</div>
		</nav>
	</header>
)
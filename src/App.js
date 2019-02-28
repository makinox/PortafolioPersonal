import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Exp from './components/experience/experience'
import Studies from './components/studies/studies'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

export default class extends React.Component {

	state = {
		lang: 'en'
	}

	handleChange = (e) => {
		this.setState({ lang: e.target.value })
	}

	render() {
		return (
			<>
				<section className="app-initial">
					<Navbar change={this.handleChange} lang={this.state.lang} />
					<Hero lang={this.state.lang} />
					<About lang={this.state.lang} />
				</section>
				<Exp lang={this.state.lang} />
				<Studies lang={this.state.lang} />
				<section className="app-final">
					<Contact lang={this.state.lang} />
					<Footer lang={this.state.lang} />
				</section>
			</>
		)
	}
}
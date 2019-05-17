import React from 'react'
import './contact.css'
import message from '../lang/messages'
import Ico1 from '../../assets/media/instagram.svg'
import Ico2 from '../../assets/media/twitter.svg'
import Ico3 from '../../assets/media/linkedin.svg'

export default (props) => (
    <section id="contact">
        <div className="contact-banner">
            <h2>{message[props.lang]['contact.title']}</h2>
        </div>
        <div className="contact-container">
            <div className="contact-item">
                <h3>{message[props.lang]['contact.sub']}</h3>
                <a href='mailto:me@jesusbossa.com'>me@jesusbossa.com</a>
                <div className="contact-media">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jesus.david7" ><img src={Ico1} alt="Jesus bossa instagram"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/makinox/"><img src={Ico3} alt="Jesus bossa linkedin"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jesMakinox"><img src={Ico2} alt="Jesus bossa twitter"/></a>
                </div>
            </div>
        </div>
    </section>
)
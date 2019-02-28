import React from 'react'
import './hero.css'
import message from '../lang/messages'

export default (props) => (
    <section>
        <div className="hero-container">
            <div className="hero-item">
                <div>
                    <h1>Jesús David Bossa</h1>
                    <p>{message[props.lang]['hero.sub']}</p>
                </div>
            </div>
        </div>
    </section>
)
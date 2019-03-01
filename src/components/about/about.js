import React from 'react'
import './about.css'
import message from '../lang/messages'

export default (props) => (
    <section className="about">
        <div className="about-container" id="about">
            <div className="about-item">
                <div>
                    <h2>{message[props.lang]['about.title']}</h2>
                    <hr align="left" />
                    <p>{message[props.lang]['about.p1']}</p>
                    <p>{message[props.lang]['about.p2']}</p>
                    <p>{message[props.lang]['about.p3']}</p>
                    <p>{message[props.lang]['about.p4']}</p>
                </div>
            </div>
        </div>
    </section>
)
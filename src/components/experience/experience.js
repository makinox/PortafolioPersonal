import React from 'react'
import './experience.css'
import img1 from '../../assets/exp/img1.jpg'
import img2 from '../../assets/exp/img2.jpg'
import img3 from '../../assets/exp/img3.jpg'
import img4 from '../../assets/exp/img4.jpg'
import img5 from '../../assets/exp/img5.png'
import img6 from '../../assets/exp/img6.jpeg'
import img7 from '../../assets/exp/img7.jpeg'
import img8 from '../../assets/exp/img8.jpeg'
import message from '../lang/messages'

export default (props) => (
    <section id="experience">
        <div className="experience-title">
            <h2>{message[props.lang]['exp.title']}</h2>
        </div>
        <div className="experience-container">
            <div >
                <div className="experience-card">
                    <div className="experience-card-header">
                        <h4>Regypos</h4>
                        <p>{message[props.lang]['exp.sub1']}</p>
                    </div>
                    <div className="experience-card-body">
                        <div className="experience-card-item experience-card-first">
                            <a href="https://www.regypos.com/" target="_blanck"><img src={img1} alt="Regypos creado por Jesus bossa" /></a>
                        </div>
                        <div className="experience-card-item experience-card-last">
                            <ul>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>PWA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="experience-card">
                    <div className="experience-card-header">
                        <h4>Inventario</h4>
                        <p>{message[props.lang]['exp.sub1']}</p>
                    </div>
                    <div className="experience-card-body">
                        <div className="experience-card-item experience-card-first">
                            <a href="https://inventory.regypos.com/" target="_blanck"><img src={img2} alt="Inventario creado por Jesus bossa" /></a>
                        </div>
                        <div className="experience-card-item experience-card-last">
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>PWA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="experience-card">
                    <div className="experience-card-header">
                        <h4>Utopia</h4>
                        <p>{message[props.lang]['exp.sub1']}</p>
                    </div>
                    <div className="experience-card-body">
                        <div className="experience-card-item experience-card-first">
                            <a href="https://utopia1.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={img3} alt="Aplicacion de utopia creada por Jesus bossa" /></a>
                        </div>
                        <div className="experience-card-item experience-card-last">
                            <ul>
                                <li>Vanilla</li>
                                <li>Bootstrap</li>
                                <li>PWA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="experience-card">
                    <div className="experience-card-header">
                        <h4>Priorize</h4>
                        <p>{message[props.lang]['exp.sub2']}</p>
                    </div>
                    <div className="experience-card-body">
                        <div className="experience-card-item experience-card-first">
                        <a href="https://priorizex.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><img src={img4} alt="Aplicacion para tareas por hacer" /></a>
                        </div>
                        <div className="experience-card-item experience-card-last">
                            <ul>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="experience-card">
                    <div className="experience-card-header">
                        <h4>MovieApp</h4>
                        <p>{message[props.lang]['exp.sub1']}</p>
                    </div>
                    <div className="experience-card-body">
                        <div className="experience-card-item experience-card-first">
                        <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40makinox/movieplayer-7392818119eeadcbdd885a0622b7063e-signed.apk"><img src={img5} width={120} alt="Aplicacion para tareas por hacer" /></a>
                        </div>
                        <div className="experience-card-item experience-card-last">
                            <ul>
                                <li>React-native</li>
                                <li>Redux</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="experience-card">
                    <div className="experience-card-header">
                        <h4>Trips</h4>
                        <p>{message[props.lang]['exp.sub1']}</p>
                    </div>
                    <div className="experience-card-body">
                        <div className="experience-card-item experience-card-first">
                        <a href="https://drive.google.com/open?id=16xQ6AhcL--BtdMiLrOAjFTo5G4kvPevU"><img src={img6} width={120} alt="Aplicacion de viajes" /></a>
                        </div>
                        <div className="experience-card-item experience-card-last">
                            <ul>
                                <li>Flutter</li>
                                <li>BLoC</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="experience-card">
                    <div className="experience-card-header">
                        <h4>Darys</h4>
                        <p>{message[props.lang]['exp.sub1']}</p>
                    </div>
                    <div className="experience-card-body">
                        <div className="experience-card-item experience-card-first">
                        <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.darys.jesusbossa"><img src={img7} width={120} alt="Aplicacion de viajes" /></a>
                        </div>
                        <div className="experience-card-item experience-card-last">
                            <ul>
                                <li>Ionic</li>
                                <li>Capacitor</li>
                                <li>Angular</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="experience-card">
                    <div className="experience-card-header">
                        <h4>Factiffy</h4>
                        <p>{message[props.lang]['exp.sub1']}</p>
                    </div>
                    <div className="experience-card-body">
                        <div className="experience-card-item experience-card-first">
                        <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.jesusbossa.factiffy"><img src={img8} width={120} alt="Aplicacion de viajes" /></a>
                        </div>
                        <div className="experience-card-item experience-card-last">
                            <ul>
                                <li>Ionic</li>
                                <li>Cordova</li>
                                <li>Angular</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
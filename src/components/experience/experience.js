import {React} from 'react'
import img1 from '../../assets/exp/img1.jpg'
import img2 from '../../assets/exp/img2.jpg'
import img3 from '../../assets/exp/img3.jpg'
import img4 from '../../assets/exp/img4.jpg'
import img5 from '../../assets/exp/img5.png'
import message from '../lang/messages'

export default (props) => (
    <section id="experience">
        <div className="title">
            <h2>{message[props.lang]['exp.title']}</h2>
        </div>
        <div className="container">
            <div className="item">
                <div className="card">
                    <div className="card-header">
                        <h4>Regypos</h4>
                        <p>{message[props.lang]['exp.sub1']}</p>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <a href="https://www.regypos.com/" target="_blanck"><img src={img1} height={90} alt="Regypos creado por Jesus bossa" /></a>
                        </div>
                        <div className="card-item card-last">
                            <ul>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>PWA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-header">
                        <h4>Inventario</h4>
                        <p>{message[props.lang]['exp.sub1']}</p>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <a href="https://inventory.regypos.com/" target="_blanck"><img src={img2} alt="Inventario creado por Jesus bossa" /></a>
                        </div>
                        <div className="card-item card-last">
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Bootstrap</li>
                                <li>PWA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-header">
                        <h4>Utopia</h4>
                        <p>{message[props.lang]['exp.sub1']}</p>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <a href="https://utopia1.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={img3} alt="Aplicacion de utopia creada por Jesus bossa" /></a>
                        </div>
                        <div className="card-item card-last">
                            <ul>
                                <li>Vanilla</li>
                                <li>Bootstrap</li>
                                <li>PWA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-header">
                        <h4>Priorize</h4>
                        <p>{message[props.lang]['exp.sub2']}</p>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                        <a href="https://priorizex.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><img src={img4} alt="Aplicacion para tareas por hacer" /></a>
                        </div>
                        <div className="card-item card-last">
                            <ul>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-header">
                        <h4>MovieApp</h4>
                        <p>{message[props.lang]['exp.sub1']}</p>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                        <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40makinox/movieplayer-7392818119eeadcbdd885a0622b7063e-signed.apk"><img src={img5} width={120} height={90} alt="Aplicacion para tareas por hacer" /></a>
                        </div>
                        <div className="card-item card-last">
                            <ul>
                                <li>React-native</li>
                                <li>Redux</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
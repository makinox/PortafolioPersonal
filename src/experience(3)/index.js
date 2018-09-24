import img1 from '../../static/exp/img1.jpg'
import img2 from '../../static/exp/img2.jpg'
import img3 from '../../static/exp/img3.jpg'
import img4 from '../../static/exp/img4.jpg'
import img5 from '../../static/exp/img5.png'

export default () => (
    <section id="experience">
        <div className="title">
            <h2>Un par de cosas que he hecho.</h2>
        </div>
        <div className="container">
            <div className="item">
                <div className="card">
                    <div className="card-header">
                        <h4>Regypos</h4>
                        <p>Proyecto en producción</p>
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
                        <p>Proyecto en producción</p>
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
                        <p>Proyecto en producción</p>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <a href="https://utopia1.herokuapp.com/" target="_blank"><img src={img3} alt="Aplicacion de utopia creada por Jesus bossa" /></a>
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
                        <p>Proyecto personal</p>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                        <a href="https://priorizex.firebaseapp.com/" target="_blank"><img src={img4} alt="Aplicacion para tareas por hacer" /></a>
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
                        <p>Proyecto en producción</p>
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
        <style jsx>{`
                .title {
                    text-align: center;
                    padding: 4%;
                }

                .container {
                    display: grid;
                    grid-template-columns:  repeat(auto-fit , minmax(auto, 340px));
                    grid-gap: 10px;
                    justify-content: center;
                    padding: 5% 0;
                }

                .card {
                    box-shadow: 0 1px 1px 0px rgba(0, 0, 0, .3);
                    border-radius: 5px;
                }

                .card-body {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 10px;
                }

                .card-header h4 {
                    padding: 20px 0 0px 20px;
                    margin: 0;
                }

                .card-header p {
                    padding: 0px 10px 10px 20px;
                    margin: 0;
                    color: #5f6368;
                }

                .card-item {
                    margin: 10px;
                }

                img {
                    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
                }

            `}
        </style>
    </section>
)
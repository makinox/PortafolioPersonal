import img1 from '../../assets/tech/Img1.svg'
import img2 from '../../assets/tech/Img2.svg'
import img3 from '../../assets/tech/Img3.svg'
import img4 from '../../assets/tech/Img4.svg'
import img5 from '../../assets/tech/Img5.svg'
import img6 from '../../assets/tech/Img6.svg'
import img7 from '../../assets/tech/Img7.svg'
import img8 from '../../assets/tech/Img8.svg'
import img9 from '../../assets/tech/Img9.svg'
import img10 from '../../assets/tech/Img10.svg'
import img11 from '../../assets/tech/Img11.svg'
import img12 from '../../assets/tech/Img12.svg'
import img13 from '../../assets/tech/Img13.svg'
import img14 from '../../assets/tech/Img14.svg'
import img15 from '../../assets/tech/Img15.svg'
import img16 from '../../assets/tech/Img16.svg'
import img17 from '../../assets/tech/Img17.svg'
import img18 from '../../assets/tech/Img18.svg'
import img19 from '../../assets/tech/Img19.svg'
import img20 from '../../assets/tech/Img20.svg'
import img21 from '../../assets/tech/Img21.svg'
import img22 from '../../assets/tech/Img22.svg'


export default () => (
    <section>
        <div>
            <h2>Que sé hasta ahora</h2>
        </div>
        <div className="card">
            <div className="card-background">
                <div className="card-container">
                    <div><img src={img1} alt="" /></div>
                    <div><img src={img2} alt="" /></div>
                    <div><img src={img3} alt="" /></div>
                    <div><img src={img4} alt="" /></div>
                    <div><img src={img5} alt="" /></div>
                    <div><img src={img6} alt="" /></div>
                    <div><img src={img7} alt="" /></div>
                    <div><img src={img8} alt="" /></div>
                    <div><img src={img9} alt="" /></div>
                    <div><img src={img10} alt="" /></div>
                    <div><img src={img11} alt="" /></div>
                    <div><img src={img12} alt="" /></div>
                    <div><img src={img13} alt="" /></div>
                    <div><img src={img14} alt="" /></div>
                    <div><img src={img15} alt="" /></div>
                    <div><img src={img16} alt="" /></div>
                    <div><img src={img17} alt="" /></div>
                    <div><img src={img18} alt="" /></div>
                    <div><img src={img19} alt="" /></div>
                    <div><img src={img20} alt="" /></div>
                    <div><img src={img21} alt="" /></div>
                    <div><img src={img22} alt="" /></div>
                </div>
            </div>
            <div className="card-overlay">
                <div>
                    <h4>Puedes encontrar todos los soportes aquí</h4>
                    <div className="btn">
                        <a href="https://drive.google.com/drive/folders/0B1M5FQ2FYAeQVFhzMGptMFRNMFE?usp=sharing" target="_blank">Certificados</a>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`

                .card {
                    position: relative;
                    display: block;
                    padding: 3% 0;
                }

                .card-background {
                    display: grid;
                    grid-template-columns:  minmax(auto, 80%);
                    justify-content: center;
                }

                .card-container {
                    display: grid;
                    grid-template-columns:  repeat(auto-fit , minmax(auto, 110px));
                    justify-content: center;
                }

                @media (max-width: 566px)  {
                    .card-container {
                        grid-template-columns: repeat(auto-fit , minmax(auto, 80px));
                    }
                }

                a {
                    display: inline-block;
                    text-decoration: none;
                    color: white;
                    border: 1px #022ED8 solid;
                    padding: 10px 45px;
                    background-color: #022ED8;
                    border-radius: 20px;
                    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, .3);
                }

                a:hover {
                    background-color: #170AFF;
                }
                
                a:active {
                    background-color: #0A6BE8;
                    box-shadow: 3px 3px 10px 0px rgba(2, 46, 214, .3);
                }

                .btn {
                    display: grid;
                    justify-content: center;
                }

                .card-overlay {
                    background: rgba(0,0,0, .6);
                    position: absolute;
                    color: white;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s, visibility 0s 0.3s;
                }

                .card:hover .card-overlay {
                    opacity: 1;
                    visibility: visible;
                    transition: opacity 0.3s;
                }

                h4, h2 {
                    text-align: center;
                }

                img {
                    cursor: pointer;
                }

                img:hover {
                    transform: scale(1.05);
                }
            `}
        </style>
    </section>
)
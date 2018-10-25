import img1 from '../../static/tech/Img1.svg'
import img2 from '../../static/tech/Img2.svg'
import img3 from '../../static/tech/Img3.svg'
import img4 from '../../static/tech/Img4.svg'
import img5 from '../../static/tech/Img5.svg'
import img6 from '../../static/tech/Img6.svg'
import img7 from '../../static/tech/Img7.svg'
import img8 from '../../static/tech/Img8.svg'
import img9 from '../../static/tech/Img9.svg'
import img10 from '../../static/tech/Img10.svg'
import img11 from '../../static/tech/Img11.svg'
import img12 from '../../static/tech/Img12.svg'
import img13 from '../../static/tech/Img13.svg'
import img14 from '../../static/tech/Img14.svg'
import img15 from '../../static/tech/Img15.svg'
import img16 from '../../static/tech/Img16.svg'
import img17 from '../../static/tech/Img17.svg'
import img18 from '../../static/tech/Img18.svg'
import img19 from '../../static/tech/Img19.svg'
import img20 from '../../static/tech/Img20.svg'
import img21 from '../../static/tech/Img21.svg'
import img22 from '../../static/tech/Img22.svg'
import message from '../lang/messages'


export default (props) => (
    <section id="studies">
        <div className="banner">
            <h2>{message[props.lang]['edu.title']}</h2>
        </div>
        <div className="card">
            <div className="card-background">
                <div className="card-container">
                    <div><img src={img1} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img2} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img3} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img4} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img5} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img6} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img7} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img8} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img9} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img10} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img11} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img12} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img13} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img14} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img15} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img16} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img17} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img18} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img19} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img20} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img21} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                    <div><img src={img22} alt="Logo de tecnologia dominada por jesús bossa" /></div>
                </div>
            </div>
            <div className="card-overlay">
                <div>
                    <h4>{message[props.lang]['edu.sub']}</h4>
                    <div className="btn">
                        <a href="https://drive.google.com/drive/folders/0B1M5FQ2FYAeQVFhzMGptMFRNMFE?usp=sharing" target="_blank">{message[props.lang]['edu.button']}</a>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`

                .card {
                    position: relative;
                    display: block;
                    padding: 4% 0;
                    margin: 2% 0;
                }

                .card-background {
                    display: grid;
                    grid-template-columns:  minmax(auto, .8fr);
                    justify-content: center;
                }

                .card-container {
                    display: grid;
                    grid-template-columns:  repeat(auto-fit , minmax(auto, 110px));
                    justify-content: center;
                }

                @media (max-width: 566px)  {
                    .card-background {
                        grid-template-columns:  minmax(auto, 1fr);                        
                    }
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
                    padding: 10px;
                    text-align: center;
                }

                h4 {
                    text-shadow: 2px 2px #000000;
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
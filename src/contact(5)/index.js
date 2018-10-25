import message from '../lang/messages'
import Ico1 from '../../static/media/instagram.svg'
import Ico2 from '../../static/media/twitter.svg'
import Ico3 from '../../static/media/linkedin.svg'

export default (props) => (
    <section id="contact">
        <div className="banner">
            <h2>{message[props.lang]['contact.title']}</h2>
        </div>
        <div className="container">
            <div className="item">
                <h3>{message[props.lang]['contact.sub']}</h3>
                <a href='mailto:me@jesusbossa.com'>me@jesusbossa.com</a>
                <div className="media">
                    <a target="_blank" href="https://www.instagram.com/jesus.david7" ><img src={Ico1} alt="Jesus bossa instagram"/></a>
                    <a target="_blank" href="https://twitter.com/jesMakinox"><img src={Ico2} alt="Jesus bossa twitter"/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/makinox/"><img src={Ico3} alt="Jesus bossa linkedin"/></a>
                </div>
            </div>
        </div>
        <style jsx>{`

            .banner {
                background: black;
                background-color: white;
                box-shadow: 1px 5px 5px 0 rgba(0,0,0,0.6);
                padding: 20px 0;
            }

            h2 {
                text-align: center;
            }

            h3 {
                padding: 20px 0;
                color: white;
            }

            .container {
                display: grid;
                grid-template-columns:  repeat(auto-fit , minmax(auto, 300px));
                justify-content: center;
                padding: 220px 0px;
                box-shadow: inset  0 0 200px 0 rgba(0,0,0,0.6);
            }

            .item {
                justify-content: center;
                text-align: center;
                padding-bottom: 40px;
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

            .media a {
                cursor: pointer;
                width: 20px;
                padding: 6px 10px;
                margin: 10px 5px;
                border-radius: 50%;
            }

            

        `}</style>
    </section>
)
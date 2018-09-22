export default () => (
    <section>
        <div className="banner">
            <h2>Contacto</h2>
        </div>
        <div className="container">
            <div className="item">
                <h3>Hablemos un rato</h3>
                <a href='mailto:me@jesusbossa.com'>me@jesusbossa.com</a>           
            </div>
        </div>
        <style jsx>{`

            .banner {
                background: black;
                background-color: white;
                box-shadow: -7px 5px 4px 1px rgba(0,0,0,0.6);
                border-bottom-left-radius: 15px;
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
                padding: 220px;
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

        `}</style>
    </section>
)
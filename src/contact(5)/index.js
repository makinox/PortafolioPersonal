export default () => (
    <section>
        <div>
            <h2>Contacto</h2>
        </div>
        <div className="container">
            <div className="item">
                <h4>You cant see me</h4>
                <a href='mailto:me@jesusbossa.com'>Hablemos</a>           
            </div>
        </div>
        <style jsx>{`

            h2 {
                text-align: center;
            }

            .container {
                display: grid;
                grid-template-columns:  repeat(auto-fit , minmax(auto, 300px));
                justify-content: center;
            }

            .item {
                border: 1px red solid;
                justify-content: center;
                text-align: center;
                padding-bottom: 40px;
            }

            a {
                display: inline-block;
                text-decoration: none;
                color: white;
                border: 1px #0A75EF solid;
                padding: 10px 45px;
                background-color: #022ED8;
                border-radius: 20px;
                box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, .3);
            }
            
            a:active {
                background-color: #0A6BE8;
                box-shadow: 3px 3px 10px 0px rgba(2, 46, 214, .3);
            }

        `}</style>
    </section>
)
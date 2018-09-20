export default () => (
    <section>
        <div>
            <h2>Que sé hasta ahora</h2>
        </div>
        <div className="container">
            <div className="item">
                <p>Frontend</p>
            </div>
            <div className="item">
                <p>Backend</p>
            </div>
        </div>
            <h4>Puedes encontrar todos los soportes aquí</h4>
        <div className="btn">
            <a href="#">Certificados</a>
        </div>
        <style jsx>
            {`
                .container {
                    display: grid;
                    grid-template-columns:  repeat(auto-fit , minmax(auto, 300px));
                    justify-content: center;
                }

                .item {
                    border: 1px red solid;
                    height: 300px;
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

                .btn {
                    display: flex;
                    justify-content: center;
                }

                h4, h2 {
                    text-align: center;
                }
            `}
        </style>
    </section>
)
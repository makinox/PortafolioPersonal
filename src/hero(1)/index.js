export default () => (
    <section>
        <div className="container">
            <div className="item">
                <div>
                    <h1>Jesús David Bossa</h1>
                    <p>Ingeniero de software</p>
                </div>
            </div>
            <div className="item">
                <img src={require('../../static/img1.svg')} alt="Ilustración"/>
            </div>
        </div>
        <style jsx>
            {`
                .container {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(auto, auto));
                    justify-content: center;
                    border: 1px yellow solid;
                    padding: 25vh;
                    grid-gap: 20px;
                }

                .item {
                    border: 1px red solid;
                    text-align: center;
                    padding: 20px;
                }

                img {
                    width: 100%;
                    font-size: 80px;
                }
            `}
        </style>
    </section>
)
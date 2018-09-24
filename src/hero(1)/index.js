export default () => (
    <section>
        <div className="container">
            <div className="item">
                <div>
                    <h1>Jesús David Bossa</h1>
                    <p>Ingeniero de software</p>
                </div>
            </div>
        </div>
        <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: minmax(auto, auto);
                    justify-content: center;
                    padding: 15% 0;
                }

                .item {
                    text-align: center;
                    padding: 20px;
                }

                h1 {
                    font-size: 45px;
                }

                p {
                    font-size: 25px;
                }

            `}</style>
    </section>
)
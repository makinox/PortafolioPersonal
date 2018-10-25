import message from '../lang/messages'

export default (props) => (
    <section>
        <div className="container">
            <div className="item">
                <div>
                    <h1>Jesús David Bossa</h1>
                    <p>{message[props.lang]['hero.sub']}</p>
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
                    padding: 5% 0;
                }

                @media (max-width: 575.98px) {
                    .item {
                        padding: 20% 0;
                    }
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
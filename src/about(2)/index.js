import message from '../lang/messages'

export default (props) => (
    <section>
        <div className="container" id="about">
            <div className="item">
                <div>
                    <h2>{message[props.lang]['about.title']}</h2>
                    <hr align="left" />
                    <p>{message[props.lang]['about.p1']}</p>
                    <p>{message[props.lang]['about.p2']}</p>
                    <p>{message[props.lang]['about.p3']}</p>
                    <p>{message[props.lang]['about.p4']}</p>
                </div>
            </div>
        </div>
        <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: minmax(auto, 900px);
                    justify-content: center;
                    padding: 20px 0;
                }

                .item {
                    padding: 20px;
                    margin: 10px 0;
                    background-color: #fff;
                    box-shadow: 0 1px 1px 0px rgba(0, 0, 0, .3);
                }
                @media screen and (max-width: 479px) {
                    .item {
                        margin: 5px;
                    }
                }

                hr {
                    width: 80%;
                    margin: 20px 0;
                }

                h2 {
                    margin-bottom: 20px;
                }

                p {
                    margin: 10px 0;
                }
            `}
        </style>
    </section>
)
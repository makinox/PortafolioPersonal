export default () => (
    <section>
        <div className="container">
            <div className="item title">
                <div>
                    <h2>Un par de cosas que he echo.</h2>
                </div>
            </div>
            <div className="item proyect">
                <div className="card">
                    <div className="card-header">
                        <h4>Un titulo</h4>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <p>Primer</p>
                        </div>
                        <div className="card-item card-last">
                            <p>Comer pollos</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item proyect">
                <div className="card">
                    <div className="card-header">
                        <h4>Un titulo</h4>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <p>Primer</p>
                        </div>
                        <div className="card-item card-last">
                            <p>Comer pollos</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item proyect">
                <div className="card">
                    <div className="card-header">
                        <h4>Un titulo</h4>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <p>Primer</p>
                        </div>
                        <div className="card-item card-last">
                            <p>Comer pollos</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item proyect">
                <div className="card">
                    <div className="card-header">
                        <h4>Un titulo</h4>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <p>Primer</p>
                        </div>
                        <div className="card-item card-last">
                            <p>Comer pollos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>
            {`
                .container {
                    border: 1px blue solid;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 20px;
                    grid-template-areas: "title title title"
                                            "space space space"
                                            ". . .";
                }

                .item {
                    border: 1px red solid;
                    margin: 10px;
                }

                .title {
                    grid-area: title;
                    text-align: center;
                }

                .card-body {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 10px;
                }

                .card-item {
                    border: 1px green solid;
                    margin: 10px;
                }
            `}
        </style>
    </section>
)
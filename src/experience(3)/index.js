export default () => (
    <section>
        <div className="title">
            <h2>Un par de cosas que he echo.</h2>
        </div>
        <div className="container">
            <div className="item">
                <div className="card">
                    <div className="card-header">
                        <h4>Un titulo</h4>
                        <p>Proyecto en producción</p>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <img src='https://placem.at/things?w=160&h=100' alt="" />
                        </div>
                        <div className="card-item card-last">
                            <ul>
                                <li>Vanilla</li>
                                <li>cssGrid</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-header">
                        <h4>Un titulo</h4>
                        <p>Proyecto en producción</p>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <img src='https://placem.at/things?w=160&h=100' alt="" />
                        </div>
                        <div className="card-item card-last">
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-header">
                        <h4>Un titulo</h4>
                        <p>Proyecto en producción</p>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <img src='https://placem.at/things?w=160&h=100' alt="" />
                        </div>
                        <div className="card-item card-last">
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>cssGrid</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-header">
                        <h4>Un titulo</h4>
                        <p>Proyecto en producción</p>
                    </div>
                    <div className="card-body">
                        <div className="card-item card-first">
                            <img src='https://placem.at/things?w=160&h=100' alt="" />
                        </div>
                        <div className="card-item card-last">
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>cssGrid</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>
            {`
                .title {
                    text-align: center;
                    padding-bottom: 10px;
                }

                .container {
                    border: 1px blue solid;
                    display: grid;
                    grid-template-columns:  repeat(auto-fit , minmax(auto, 340px));
                    grid-gap: 10px;
                    justify-content: center;
                }
                
                @media (min-width: 1059px) and (max-width: 1391px)  {
                    .item:last-of-type {
                        display: none;
                    }
                }

                .card {
                    box-shadow: 0 1px 1px 0px rgba(0, 0, 0, .3);
                    // border: 1px #f0f0f0 solid;
                    border-radius: 5px;
                }

                .card-body {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 10px;
                }

                .card-header h4 {
                    padding: 20px 0 0px 20px;
                    margin: 0;
                }

                .card-header p {
                    padding: 0px 10px 10px 20px;
                    margin: 0;
                    color: #5f6368;
                }

                .card-item {
                    margin: 10px;
                }

            `}
        </style>
    </section>
)
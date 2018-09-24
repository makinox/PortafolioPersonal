export default () => (
    <section>
        <div className="container" id="about">
            <div className="item">
                <div>
                    <h2>Un poco sobre mi ...</h2>
                    <hr align="left" />
                    <p>Soy un chico de Colombia que le gusta mucho programar, normalmente curioso por todo aquello fantástico que ofrece la tecnología.</p>
                    <p>Durante los dos últimos años, me he dedicado a desarrollar e innovar proyectos en tecnología, contribuyendo a su desarrollo y futuro.</p>
                    <p>Trabajo en frontend, backend y devop. Construyo y diseño diferentes tipos de software convirtiéndolos en productos y servicios increíbles.</p>
                    <p>Déjame mostrarte.</p>
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
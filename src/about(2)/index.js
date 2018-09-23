export default () => (
    <section>
        <div className="container">
            <div className="item">
                <div>
                    <h2>Un poco sobre mi ...</h2>
                    <hr align="left" />
                    <p>Soy un chico de colombia que le gusta mucho programar, normalmente curioso por todo aquello fantastico que ofrece la tecnología.</p>
                    <p>Durante los dos ulimos años, me he dedicado a  desarrollar e innovar proyectos en tecnología, contribuyendo al desarrollo y futuro de la tecnologia.</p>
                    <p>Trabajo en frontend, backend y devop. Construyo sofware y lo diseño convirtiendolo en productos y servicios
                        increibles.
                        </p>
                    <p>Dejame mostrarte de que hablo.</p>
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
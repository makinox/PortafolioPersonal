export default () => (
    <header>
        <nav>
            <div>
                <li><img src="https://jesusbossa.com/public/logo.svg" alt="Logo de jesús bossa" /></li>
            </div>
            <div>
                <li>Acerca</li>
            </div>
            <div>
                <li>Experiencia</li>
            </div>
            <div>
                <li>Educación</li>
            </div>
            <div>
                <li>Contactame</li>
            </div>
        </nav>
        <style jsx>
            {`
            nav {
                background-color: #fff;
                padding: 15px;
                box-shadow: 0 3px 3px 1px rgba(0, 0, 0, .1);
                display: grid;
                grid-template-columns: minmax(auto, 800px) repeat(4, auto);
                grid-gap: 10px;
                align-items: center;
            }

            nav li {
                display: inline;
                color: rgba(0,0,0, .7);
                transition: 0.3s ease;
                cursor: pointer;
            }

            nav li:hover {
                color: rgb(0,0,0)
            }

            nav li img {
                width: 35px;                
            }

            @media screen and (max-width: 479px) {
                nav {
                    grid-template-columns: repeat(4, auto);
                }
                nav div:first-of-type {
                    display: none;
                }
            }
            `}
        </style>
    </header>
)
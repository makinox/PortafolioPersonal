import img1 from '../../static/navbar/logo.svg'

export default () => (
    <header>
        <nav>
            <div>
                <a href="#"><img src={img1} alt="Logo de jesús bossa" /></a>
            </div>
            <div>
                <a href="#about">Acerca</a>
            </div>
            <div>
                <a href="#experience">Experiencia</a>
            </div>
            <div>
                <a href="#studies">Educación</a>
            </div>
            <div>
                <a href="#contact">Contactame</a>
            </div>
        </nav>
        <style jsx>
            {`
            nav {
                background-color: rgba(255, 255, 255, .9);
                padding: 15px;
                box-shadow: 0 3px 3px 1px rgba(0, 0, 0, .1);
                display: grid;
                grid-template-columns: minmax(auto, 800px) repeat(4, auto);
                grid-gap: 10px;
                align-items: center;
            }

            nav a {
                display: inline;
                color: rgba(0,0,0, .7);
                transition: 0.3s ease;
                cursor: pointer;
                text-decoration: none;
            }

            nav a:hover {
                color: rgb(0,0,0)
            }

            nav a img {
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
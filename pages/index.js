import Head from '../src/head/index'
import Navbar from '../src/navbar/index'
import Hero from '../src/hero(1)/index'
import About from '../src/about(2)/index'
import Exp from '../src/experience(3)/index'
import Studies from '../src/studies(4)/index'
import Contact from '../src/contact(5)/index'
import Footer from '../src/footer/index'
import img1 from '../static/footer/img1.jpg'
import form1 from '../static/hero/form1.svg'

export default class extends React.Component {
    render(){
        return (
            <div>
                <Head />
                <section className="initial">
                    <Navbar />
                    <Hero />
                    <About />
                </section>
                <Exp />
                <Studies />
                <section className="final">
                    <Contact />
                    <Footer />
                </section>
                <style>{`
                    .initial {
                        background-image: url(${form1});
                        background-repeat: no-repeat;
                        background-position-x: 210%;
                        background-position-y: 20%;
                        background-size: 70%;
                    }

                    @media (max-width: 575.98px) {
                        
                        .initial {
                            background-position-x: 340%;
                            background-size: 80%;
                        }
                        
                    }

                    .final {
                        background-image: url(${img1});
                        position: relative;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-attachment: fixed;
                    }

                `}</style>
            </div>
        )
    }
}
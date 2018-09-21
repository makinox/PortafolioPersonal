import Head from '../src/head/index'
import Navbar from '../src/navbar/index'
import Hero from '../src/hero(1)/index'
import About from '../src/about(2)/index'
import Exp from '../src/experience(3)/index'
import Studies from '../src/studies(4)/index'
import Contact from '../src/contact(5)/index'
import Footer from '../src/footer/index'
import img1 from '../static/footer/img1.jpg'

export default class extends React.Component {
    render(){
        return (
            <div>
                <Head />
                <Navbar />
                <Hero />
                <About />
                <Exp />
                <Studies />
                <section className="final">
                    <Contact />
                    <Footer />
                </section>
                <style>{`

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
import Navbar from '../src/navbar/index'
import Hero from '../src/hero(1)/index'
import About from '../src/about(2)/index'
import Exp from '../src/experience(3)/index'
import Studies from '../src/studies(4)/index'
import Contact from '../src/contact(5)/index'

export default class extends React.Component {
    render(){
        return (
            <div>
                <style jsx global>
                    {`
                        body {
                            font-family: system-ui;
                            margin: 0;
                        }
                    `}
                </style>
                <Navbar />
                <Hero />
                <About />
                <Exp />
                <Studies />
                <Contact />
            </div>
        )
    }
}
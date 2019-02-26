import {React} from 'react'
import img1 from '../../assets/navbar/logo.svg'
import message from '../lang/messages'

export default (props) => (
  <header>
      <nav>
          <div>
              <a href="#a"><img src={img1} alt="Logo de jesús bossa" /></a>
          </div>
          <div>
              <a href="#about">{message[props.lang]['nav.about']}</a>
          </div>
          <div>
              <a href="#experience">{message[props.lang]['nav.exp']}</a>
          </div>
          <div>
              <a href="#studies">{message[props.lang]['nav.edu']}</a>
          </div>
          <div>
              <a href="#contact">{message[props.lang]['nav.contact']}</a>
          </div>
          <div>
              <select onChange={props.change} name="lang">
                  <option value="en" defaultValue><span role="img" aria-label="img">🇺🇸</span></option>
                  <option value="es"><span role="img" aria-label="img">🇪🇸</span></option>
              </select>
          </div>
      </nav>
  </header>
)
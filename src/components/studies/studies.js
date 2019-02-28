import React from 'react'
import './studies.css'
import img1 from '../../assets/tech/Img1.svg'
import img2 from '../../assets/tech/Img2.svg'
import img3 from '../../assets/tech/Img3.svg'
import img4 from '../../assets/tech/Img4.svg'
import img5 from '../../assets/tech/Img5.svg'
import img6 from '../../assets/tech/Img6.svg'
import img7 from '../../assets/tech/Img7.svg'
import img8 from '../../assets/tech/Img8.svg'
import img9 from '../../assets/tech/Img9.svg'
import img10 from '../../assets/tech/Img10.svg'
import img11 from '../../assets/tech/Img11.svg'
import img12 from '../../assets/tech/Img12.svg'
import img13 from '../../assets/tech/Img13.svg'
import img14 from '../../assets/tech/Img14.svg'
import img15 from '../../assets/tech/Img15.svg'
import img16 from '../../assets/tech/Img16.svg'
import img17 from '../../assets/tech/Img17.svg'
import img18 from '../../assets/tech/Img18.svg'
import img19 from '../../assets/tech/Img19.svg'
import img20 from '../../assets/tech/Img20.svg'
import img21 from '../../assets/tech/Img21.svg'
import img22 from '../../assets/tech/Img22.svg'
import message from '../lang/messages'


export default (props) => (
	<section id="studies">
		<div className="studies-banner">
			<h2>{message[props.lang]['edu.title']}</h2>
		</div>
		<div className="studies-card">
			<div className="studies-card-background">
				<div className="studies-card-container">
					<div><img src={img1} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img2} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img3} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img4} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img5} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img6} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img7} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img8} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img9} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img10} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img11} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img12} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img13} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img14} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img15} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img16} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img17} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img18} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img19} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img20} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img21} alt="Logo de tecnologia dominada por jesús bossa" /></div>
					<div><img src={img22} alt="Logo de tecnologia dominada por jesús bossa" /></div>
				</div>
			</div>
			<div className="studies-card-overlay">
				<div>
					<h4>{message[props.lang]['edu.sub']}</h4>
					<div className="studies-btn">
						<a href="https://drive.google.com/drive/folders/0B1M5FQ2FYAeQVFhzMGptMFRNMFE?usp=sharing" target="_blank" rel="noopener noreferrer">{message[props.lang]['edu.button']}</a>
					</div>
				</div>
			</div>
		</div>
	</section>
)
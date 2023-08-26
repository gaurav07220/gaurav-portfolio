import './Home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Typing from '../../components/typing/Typing'
import my_image from '../../assets/port t.jpg'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import resume from './GAURAV_CHAVAN_RESUME.pdf';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div className="home-section" data-aos="fade-right">
            <div className="my-image">
                <img src={my_image} alt="" />
            </div>
            <div className="my-inf">
                <div className="name">
                    <h1>Gaurav Chavan</h1>
                </div>
                <div className="positions">
                    <Typing />
                </div>
                <div className="short-intro">
                    <p>Im  React.js developer with a passion for building dynamic and responsive web applications. <br />My expertise lies in creating seamless user interfaces that deliver exceptional user experiences.</p>
                </div>
                <div className="get-cv">
                    <button className='hire-btn' onClick={() => navigate('/contact')}>Hire Me</button>
                    <a href={`${resume}`} className='get-cv-btn'
                        download
                    >
                        Get Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home

import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import about_img from '../../assets/port.jpg'
import Progressbar from '../../components/progress/ProgressBar'
import { useEffect } from 'react';
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, [])
  return (
    <div className="about-section">
      <div className="about-heading">
        <h2>About Me </h2>
      </div>

      <div className="about-image" data-aos="fade-right">
        <img src={about_img} alt="" />
      </div>

      <div className="about-name" data-aos="fade-right">
        <h2>Gaurav Chavan</h2>
        <p>React Js Developer</p>
      </div>

      <div className="about-intro" data-aos="fade-right">
        <p>
          Hello, Im Gaurav Chavan , a React.js developer with a passion for crafting exceptional user experiences. I specialize in building responsive, interactive web applications that engage and inspire. Explore my portfolio to see how I bring ideas to life with clean, efficient code and innovative design. Lets collaborate on your next project and create something extraordinary together!
        </p>
      </div>
      <hr />
      <div className="personal-inf" data-aos="fade-right">
       
        <div className="personal-one">
          <div className="personal-key">
            <p>Birthday</p>
            <p>Age</p>
            <p>Address</p>
            <p>Email</p>
            <p>Phone</p>
          </div>
          <div className="personal-value">
            <p>07-02-2000</p>
            <p>23 Years</p>
            <p>Jalgaon , 425001</p>
            <p>gauravchavhan05@gmail.com</p>
            <p>+91 883-089-4932</p>
          </div>
        </div>
        <div className="personal-two">
          <div className="personal-key">
            <p>Nationality</p>
            <p>Study</p>
            <p>Degree</p>
            <p>Interest</p>
            <p>Joining</p>
          </div>
          <div className="personal-value">
            <p>Indian</p>
            <p>Computer Science</p>
            <p>Master</p>
            <p>Programming,Cricket</p>
            <p>Immediate</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="education" data-aos="fade-right">
        <h3>Education</h3>
        <div className="mca">
          <h5>Master Of Computer Application</h5>
          <span>Chandigarh University</span>
          <span>Expected Date July 2024</span>
        </div>
        <div className="mern">
          <h5>Diploma Of Full stack Web Development</h5>
          <span>Techstack Academy Delhi</span>
          <span>Duration 1 Yr</span>
        </div>
        <div className="graduate">
          <h5>Bachelor Of Commerce</h5>
          <span>Dr Baba Saheb Ambedkar Marathwada University Aurangabad</span>
          <span>Paased - 2022</span>
        </div>
      </div>
      <hr />
      <div className="skills">
        <div className="tech-skills" data-aos="fade-right">
          <h3>Programming Skills</h3>
          <div className="skill-inf" >
            <div className="html">
              <p>HTML 5</p>
              <Progressbar skills={90} />
            </div>
            <div className="css">
              <p>CSS 3</p>
              <Progressbar skills={80} />
            </div>
            <div className="js">
              <p>JavaScript/ES6</p>
              <Progressbar skills={70} />
            </div>
            <div className="react">
              <p>React Js</p>
              <Progressbar skills={80} />
            </div>
            <div className="redux">
              <p>Redux Toolkit</p>
              <Progressbar skills={60} />
            </div>
            <div className="next">
              <p>Next Js</p>
              <Progressbar skills={70} />
            </div>
          </div>
        </div>
        <hr />
        <div className="languages" data-aos="fade-right">
          <h3>Langueges</h3>
          <div className="languages-inf">
            <div className="marathi">
              <p>Marathi</p>
              <Progressbar skills={100} />
            </div>
            <div className="hindi">
              <p>Hindi</p>
              <Progressbar skills={90} />
            </div>
            <div className="eng">
              <p>English</p>
              <Progressbar skills={70} />
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default About

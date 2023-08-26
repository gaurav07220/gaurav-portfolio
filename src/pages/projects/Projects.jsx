import './Projects.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom'
import { Project_data } from './project_data'
import { useEffect } from 'react';
const Projects = () => {
    useEffect(()=>{
        Aos.init({duration:1200})
    },[])
    return (
        <div className="project-section">
            {
                Project_data.map((item) => {
                    return (
                        <div className="project" key={item.id} data-aos="zoom-in">
                            <p>{item.project_name}</p>
                            <img src={item.imgURL} alt="" />
                            <NavLink to={item.url} target='_blank' className='go-live'>Go Live</NavLink>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Projects

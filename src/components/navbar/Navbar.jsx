import './Navbar.css'
import { NavLink } from "react-router-dom"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <nav className={menu ? 'navbar expand-nav' : 'navbar'}>
            <div className="logo">

            </div>
            <div className={menu ? 'navlinks show' : 'navlinks'}>

                <span>
                    <NavLink className='nav-link' to='/gaurav-portfolio'>Home</NavLink>
                </span>
                <span>
                    <NavLink className='nav-link' to='/about'>About</NavLink>
                </span>
                <span>
                    <NavLink className='nav-link' to='/projects'>Projects</NavLink>
                </span>
                <span>
                    <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                </span>


            </div>
            <div className="menu">
                <button onClick={() => setMenu(!menu)}>{menu ? <CloseOutlinedIcon className="menu-icon" /> : <MenuOutlinedIcon className='menu-icon' />}</button>
            </div>
        </nav>
    )
}

export default Navbar;

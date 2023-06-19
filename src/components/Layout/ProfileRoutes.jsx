import React,{Fragment, useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import classes from './ProfileRoutes.module.css';
import SocialMediaHandler from './SocialMediaHandler';
import { Link } from 'react-router-dom';
import Projects from '../Projects/Projects';
function ProfileRoutes(){
    const navBarRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const profileNavMenuBar = () => {
        setIsNavOpen(true);
    }
    const hideNavMenuBar = () => {
        setIsNavOpen(false);
    }
    return <Fragment>
        <h3></h3>
        <nav className={`${classes.navH} ${isNavOpen && classes.responsiveNavOpen}`}>
            <div onClick={()=> setIsNavOpen(false)}>
                <Link to="/">Home</Link>
            </div>
            <div onClick={()=> setIsNavOpen(false)}>
                <Link to="/projects">Projects</Link>
            </div>
            <div onClick={()=> setIsNavOpen(false)}>
                <Link to="/skills">Skills</Link>
            </div>
            <div onClick={()=> setIsNavOpen(false)}>
                <Link to="/contact">Contact</Link>
            </div>
           <button className={`${classes.navBtn} ${isNavOpen && classes.navCloseBtn}`} onClick={hideNavMenuBar}>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
            
        </nav>
        <button className={`${classes.navBtn} ${!isNavOpen && classes.navMenuBtn}`} onClick={profileNavMenuBar}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
    </Fragment>    
}

export default ProfileRoutes;
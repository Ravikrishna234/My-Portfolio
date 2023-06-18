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
        // console.log(navBarRef);
        // console.log("open buttonb ");
		// navBarRef.current.classList.add("responsiveNavOpen");
        // navBarRef.current.classList.remove('responsiveNavClose');
        // console.log(navBarRef.current);
        setIsNavOpen(true);

    }
    const hideNavMenuBar = () => {
        console.log('close button');
        // navBarRef.current.classList.add('responsiveNavClose');
        // navBarRef.current.classList.remove('responsiveNavOpen');
        // /
        // navBarRef.current.classList.remove('responsiveNavClose');
        // navBarRef.current.classList.toggle('responsiveNav');
        // console.log(navBarRef.current.classList);
        // console.log(navBarRef.current);
        setIsNavOpen(false);

        // ''
    }
    return <Fragment>
        <h3></h3>
        
        <nav className={`${classes.navH} ${isNavOpen && classes.responsiveNavOpen}`}
>
            {/* <a href="#">Home</a> */}
            {/* <a href="#">Projects</a> */}
            {/* <a href="#">Skills</a> */}
            {/* <a href="#">About</a> */}
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
            <button className={`${classes.navBtn} ${classes.navCloseBtn}`} onClick={hideNavMenuBar}>
            {/* <button className={`${classes.navBtn} ${classes.navCloseBtn}`} onClick={profileNavMenuBar}></button> */}
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
            
        </nav>
        <button className={`${classes.navBtn} ${classes.navMenuBtn}`} onClick={profileNavMenuBar}>
        {/* <button className={`${classes.navBtn} ${classes.navMenuBtn}`} onClick={hideNavMenuBar}> */}
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
    </Fragment>    
}
export default ProfileRoutes;
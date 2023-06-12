import React,{Fragment, useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import classes from './ProfileRoutes.module.css';
import SocialMediaHandler from './SocialMediaHandler';

function ProfileRoutes(){
    const navBarRef = useRef();
    const profileNavMenuBar = () => {
        // console.log(navBarRef);
		navBarRef.current.classList.add("responsiveNav");
        console.log(navBarRef.current);
    }
    const hideNavMenuBar = () => {
        navBarRef.current.classList.remove('responsiveNav');
    }
    return <Fragment>
        <h3></h3>
        
        <nav ref={navBarRef} >
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">About</a>
            <button className={`${classes.navBtn} ${classes.navCloseBtn}`} onClick={hideNavMenuBar}>
            {/* <button className={`${classes.navBtn} ${classes.navCloseBtn}`} onClick={profileNavMenuBar}></button> */}
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
            
        </nav>
        <button className={`${classes.navBtn} ${classes.navMenuBtn}`} onClick={profileNavMenuBar}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
    </Fragment>    
}
export default ProfileRoutes;
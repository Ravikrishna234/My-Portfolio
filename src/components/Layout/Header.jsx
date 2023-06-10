import React from 'react';
import classes from './Header.module.css';
import SocialMediaHandler from './SocialMediaHandler';
// import ProfileRoutes from './ProfileRoutes';
function Header() {
    return <React.Fragment>
        <header className={classes.header}>
            {/* <ProfileRoutes></ProfileRoutes> */}
            <SocialMediaHandler></SocialMediaHandler>
        </header>
    </React.Fragment>
}

export default Header;
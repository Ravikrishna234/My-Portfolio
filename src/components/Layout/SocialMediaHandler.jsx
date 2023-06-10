import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import classes from './SocialMediaHandler.module.css';

function SocialMediaHandler(){
    return <React.Fragment>
        <div className= {classes['rootdiv']}>
            <a className={classes['social-media-icons']} href="https://www.linkedin.com/in/dontula-ravikrishna-905722165/">
            	<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a className={classes['social-media-icons']} href="https://github.com/Ravikrishna234">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    </React.Fragment>
}

export default SocialMediaHandler;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub }from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import classes from './SocialMediaHandler.module.css';

function SocialMediaHandler(){
    return <React.Fragment>
        <div className= {classes['rootdiv']}>
            <a 
                href="src/assets/Ravi's Resume.pdf" 
                target="_blank"
                className={classes['social-media-icons']} download>
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                <span className={classes.tooltip}>Resume <br/> Ravi Krishna's Resume</span>
            </a>
            <a 
                className={classes['social-media-icons']} 
                href="https://www.linkedin.com/in/dontula-ravikrishna-905722165/">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                <span className={classes.tooltip}>Linkedin <br/> Dontula Ravi Krishna</span>
            </a>
            <a className={classes['social-media-icons']} href="https://github.com/Ravikrishna234">
                <FontAwesomeIcon icon={faGithub}> </FontAwesomeIcon>
                <span className={classes.tooltip}>Github <br/> Ravikrishna234</span>
            </a>
        </div>
    </React.Fragment>
}

export default SocialMediaHandler;
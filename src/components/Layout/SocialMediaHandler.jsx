import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import classes from './SocialMediaHandler.module.css';

function SocialMediaHandler(){
    return <React.Fragment>
        <div className= {classes['rootdiv']}>
            <a 
                className={classes['social-media-icons']} 
                href="https://www.linkedin.com/in/dontula-ravikrishna-905722165/">
                {/* // title="Linkedin"> */}
                {/* // title="Linkedin &#013; Dontula RAVIKRISHNA" */}
                {/* // title=}`${LinkedIn}`> */}
                {/* <span className={classes.linkedinTooltip}>Linkedin <br/> Dontula Ravi Krishna</span> */}
                {/* <span className={classes.linkedinTooltip}>Dontula Ravi Krishna</span> */}
            	{/* <FontAwesomeIcon icon={faLinkedin} title='a'></FontAwesomeIcon> */}
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                {/* <span className={classes.linkedinTooltip}>Linkedin <br/> Dontula Ravi Krishna</span> */}
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
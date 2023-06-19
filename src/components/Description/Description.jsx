import React from 'react';
import classes from './Description.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function Description(){
    return (<React.Fragment>
        <div className={classes.description}>
            <h2>Ravi Krishna Dontula</h2>
            <h3>Full Stack Developer and Data Science Engineer</h3>
            <p>A passionate engineer dedicated to crafting innovative solutions and driven by a desire for continuous growth</p>
            <div className={classes.descriptionButton}>
                <a href="src/assets/Ravi's Resume.pdf" target="_blank">
                    <button className={classes.downloadButton}>Ravi Krishna's Resume
                    <FontAwesomeIcon icon={faDownload} style={{marginLeft:'5px'}}></FontAwesomeIcon>
                    </button>
                 </a>
                <Link to="/contact">
                    <button className={classes.contactButton}>Contact Me</button> 
                </Link>                
            </div>
        </div>
    </React.Fragment>)
}

export default Description;
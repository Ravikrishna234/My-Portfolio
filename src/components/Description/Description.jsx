import React from 'react';
import classes from './Description.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
// import 
// import {faDownload} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
function Description(){
    return <>
        <div className={classes.description}>
            <h2>Ravi Krishna Dontula</h2>
            <h3>Full Stack Developer and Data Science Engineer</h3>
            {/* <p>A Passionate </p> */}
            <p>A passionate engineer dedicated to crafting innovative solutions and driven by a desire for continuous growth</p>
            {/* ? */}
            <div className={classes.descriptionButton}>
                {/* <button  */}
                {/* <a className={classes.downloadButton}> */}
                <a href="" target="_blank">
                {/* // l */}
                    <button className={classes.downloadButton}>Ravi Krishna's Resume
                    <FontAwesomeIcon icon={faDownload} style={{marginLeft:'5px'}}></FontAwesomeIcon>
                    {/* <FontAwesomeIcon icon={faDownload} style={{marginLeft: '105px'}}></FontAwesomeIcon> */}

                    {/* <FontAwesomeIcon icon={faDownload} style={{marginLeft: '10px'}}></FontAwesomeIcon> */}
                        {/* <FontAwesomeIcon icon={faDownload} className></FontAwesomeIcon> */}
                    </button>
                    {/* // ? */}
                    </a>
                {/* </button> */}
            {/* m} */}
                <Link to="/contact">
                    {/* <button  */}
                    <button className={classes.contactButton}>Contact Me</button> 
                    {/* <a className={classes.contactButton}>Contact Me</a> */}
                    {/* </button> */}
                </Link>
                
            </div>
        </div>
        </>
}
export default Description;
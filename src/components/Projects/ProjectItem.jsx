import React from 'react';
import classes from './ProjectItem.module.css';
import Card from '../UI/Card';

function ProjectItem(props){
    return <>
        <Card>
          <div className={classes.image}>
            {/* {props.projectImages[0] && <img className={classes.projectImage} src={`../../assets/ProjectImages/` + `${props.projectImages[0]}`} /> } */}
            {/* {props.projectImages[0] && <img className={classes.projectImage} src={`${10}`}/> */}
            {/* {props.projectImages[0] && <img className={classes.projectImage} src=`${props.projectImages[0]}`} /> }  */}
            {props.projectImages[0] && <img className={classes.projectImage} src={`${props.projectImages[0]}`} />}
          </div>
          <div className={classes.title}><h3>{props.name}</h3></div>
          <div className={classes.projectText} dangerouslySetInnerHTML={{ __html: props.description }}>
          </div>
          <div className={classes.projectTechnology}>
            <strong>Technologies Used: </strong> {props.technologiesUsed}
          </div>
          <div className='row'>
            {props.demoLink && <a href={`${props.demoLink}`} target='_blank'><button className={classes.demoButton}>Live Demo</button></a>}
            {props.github && <a href={`${props.github}`} target='_blank'><button className={classes.demoButton}>Source Code</button></a>}
          </div>
        </Card>        
    </>
}
export default ProjectItem;
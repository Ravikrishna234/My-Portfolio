import React from 'react';
import classes from './ProjectItem.module.css';
import Card from '../UI/Card';

function ProjectItem(props){
    // console.log(props);
    // return <>{props.children}</>
    return <>
        {/* <div className={faChampagneGlasses.item}></div> */}
        {/* <div className={ck}></div> */}
        {/* <div className={faChampagneGlasses.}></div> */}
        <Card>
            {/* <div className={classes.item}> */}
                <div className={classes.image}></div>
                <div className={classes.title}><h3>{props.name}</h3></div>
                {/* <p className={classes.description2+}>{props.description}</p> */}
                <div className={classes.projectText} dangerouslySetInnerHTML={{ __html: props.description }}>
                    {/* <p className={classes.description}> */}
                        {/* {props.description} */}
                    {/* </p> */}
                </div>
                <div className={classes.projectTechnology}>
                    {/* Technologies Used rs{props,} */}
                   <strong>Technologies Used: </strong> {props.technologiesUsed}
                </div>
                {/* <button>,</button> */}
                {/* <a href=""><button>Demo Link</button></a> */}
                <div className='row'>
                    {props.demoLink && <a href={`${props.demoLink}`} target='_blank'><button className={classes.demoButton}>Live Demo</button></a>}
                    {props.github && <a href={`${props.github}`} target='_blank'><button className={classes.demoButton}>Source Code</button></a>}
                </div>
                

            {/* </div> */}
        </Card>
        
    </>
}
export default ProjectItem;
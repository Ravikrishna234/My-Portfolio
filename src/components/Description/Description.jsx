import React from 'react';
import classes from './Description.module.css';
function Description(){
    return <>
        <div className={classes.description}>
            <h2>Ravi Krishna Dontula</h2>
            <h3>Full Stack Developer and Data Science Engineer</h3>
            {/* <p>A Passionate </p> */}
            <p>A passionate engineer dedicated to crafting innovative solutions and driven by a desire for continuous growth</p>
            {/* ? */}
        </div>
        </>
}
export default Description;
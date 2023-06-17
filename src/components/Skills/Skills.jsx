import React from 'react';
import classes from './Skills.module.css';
// import SkillItem from './SkillItem';
const SKILL_DICT = {
    programmingLanguages: 'Programming Languages',
    frameworkLibraries: 'Machine Learning - Frameworks and Libraries',
    dataVisualization: 'Data Visualization',
    frontEnd: 'Frontend',
    backEnd: 'Backend',
    databases: 'Databases',
    tools: 'Tools',
    testing: 'Testing',
    devops: 'DevOps'
    // m
}
// _M
    const SKILLS = [{
        // programmingLanguages:[{}\
        programmingLanguages:[{
            // id:'p1',
            id: 's1',
            // skill: 'JAVA, Python, C',
            skill: 'Java, Python, C, R programming',
            skillColor:['#007396', '#3776AB', '#A8B9CC','#276DC3'],
            skillLink: ['https://www.java.com','https://www.python.org','https://www.w3schools.com/c/c_intro.php',
            'https://www.r-project.org/']
            // skillLink: ['https://www.java.com','https://www.python.org0']
            // skillLink:[' https://www.java.com', ' https://www.python.org','https://www.w3schools.com/c/c_intro.php']
        // }, {
        }],
        frameworkLibraries: [{
            id: 's2',
            // skill: 'Pandas, NumPy, scikit-learn, NLTK, TensorFlow, Keras, Open CV, MatplotLib',
            skill: 'Pandas, NumPy, scikit-learn, NLTK, TensorFlow, Keras, Open CV, Matplotlib',
            // , XAMPP Server',
            skillColor: ['#150458','#013243','#F7931E','#4E88A4','#FF6F00','#D00000','#5C3EE8',
            // '#FB7A24',
            '#11557C'],
            skillLink:['https://pandas.pydata.org', '  https://numpy.org',' https://scikit-learn.org','https://www.nltk.org',
            ' https://www.tensorflow.org','https://keras.io','https://opencv.org',' https://www.apachefriends.org/index.html',
            // .
            'https://matplotlib.org/']
        }],
        dataVisualization:[{
            id: 's3',
            skill: 'Microsoft PowerBI, Google Data Studio, Tableau, MS Excel',
            skillColor: ['#FDB913', '#4285F4', '#FF6F00', '#217346'],
            skillLink:['https://powerbi.microsoft.com/en-us/','https://marketingplatform.google.com/about/data-studio/',
            'https://www.tableau.com/','https://www.microsoft.com/en-us/microsoft-365/excel']
        }],
        // databases:[{
        //     // id: 's2',
        //     id: 's',
        //     skill:'MySQL, MS Sql, SQLite, PostgreSQL'
        // }],
        frontEnd:[{
            // id: 's3',
            // id: 's3',
            id: 's4',
            // skill: 'Angular, React, React-Redux, Node.js,pjp HTML5, CSS3, Javascript',
            skill: 'Angular, React, React-Redux, Node.js, php, HTML5, CSS3, Javascript',
            // m
            skillColor: ['#DD0031','#61DAFB','#764ABC','#339933','#777BB4','#E34F26','#1572B6','#F7DF1E'],
            skillLink:['https://angular.io/', 'https://reactjs.org/','https://react-redux.js.org/',
            'https://nodejs.org/','https://www.php.net/',
            // 'https://www.php.net/manual/en/getting-started.php',
            'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
            'https://developer.mozilla.org/en-US/docs/Web/CSS',
            // 'https://opencv.org',
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript']
        }],
        backEnd:[{
            // id: 's4',
            // id: 's4',
            id:'s5',
            skill: 'Node.js, Express.js, hapi.js, Flask, Django, Fast-API, Socket.IO',
            skillColor: ['#68A063','#000000','#7A68A6',' #000000','#092E20','#009485','#010101'],
            skillLink:['https://expressjs.com/','https://hapi.dev/','https://flask.palletsprojects.com/',
            'https://www.djangoproject.com/','https://fastapi.tiangolo.com/','https://socket.io/']
        }],
        databases:[{
            // id: 's2',
            // id: 's5',
            id:'s6',
            // skill:'MySQL, MS Sql, SQLite, PostgreSQL','MongoDB',
            skill:'Oracle MySQL, MS Sql, SQLite, PostgreSQL, MongoDB',
            // skill:'MySQL, MS Sql, SQLite, PostgreSQL','MongoDB',
            skillColor: ['#4479A1','#CC2927','#003B57','#336791','#13AA52'],
            skillLink: ['https://www.mysql.com/','https://www.microsoft.com/en-us/sql-server/',
            'https://www.sqlite.org/','https://www.postgresql.org/','https://www.mongodb.com/']
        }],
        tools:[{
            // id: 's6',
            id:'s7',
            skill: 'Git, GitLab, GitHub, Bitbucket, MS Office Suite',
            skillColor: ['#F05032','#FC6D26','#181717','#205081'],
            skillLink: ['https://git-scm.com/','https://about.gitlab.com/','https://github.com/','https://bitbucket.org/']
        }],
        devops: [{
            // id: 's5',
            // id: 's7',
            id:'s8',
            // skill: 'Amazon Web Services(AWS), Microsoft Azure, Container Docker'
            skill: 'Amazon Web Services(AWS), Microsoft Azure,Docker',
            skillColor: ['#FF9900','#0078D4','#0DB7ED'],
            skillLink: ['https://aws.amazon.com/','https://azure.microsoft.com/','https://www.docker.com/']
        }],
        testing: [{
            // id: 's5',
            // id: 's8',
            id:'s9',
            skill:'Angular(Karma and Jasmine), Selenium',
            skillColor: ['#61DAFB','#43B02A'],
            skillLink: ['https://karma-runner.github.io/','https://www.selenium.dev/']
        }],
    }]
        // cloud:[{
            // ID/
            // id: 's4',
            // skill: ''
        // }],

            // skills
        // }],

        // frameworkLibraries:[{
            // id: 's7',
            // skill: 'Pandas, NumPy, scikit-learn, XAMMLTK'
            // skill: 'Pandas, NumPy, scikit-learn, NLTK, TensorFlow, Keras, Openp'
            // skill: 'Pandas, NumPy, scikit-learn, NLTK, TensorFlow, Keras, Open CV, XAMPP Server'
        // }]
        
    // }]
    // function Skills(){
        // function Skills(){
// function Skills(){
    // function Skills(){
        // function Skills(){
            // function Skills(){
function SkillItem(props) {
    return<>
    {/* Hello */}
    <div className={classes.skillCard}>
        <div className={classes.skillTitle}>{props.title}</div>
    {/* <div className='row'> */}
        <div className={classes.skillPills}>
        {/* { return props.skills.map((item) => { */}
            {props.skills.map((item, index) => { 
            // console.log(item);
            // <div className={classes.skillPillButton}>
                // return (<a href={props.skillLink[index]} target='+blank'
                return (<a key={item} href={`${props.skillLink[index]}`} target='_blank'><button 
                        key={item} 
                        className={classes.skillPillButton}
                        // style={{boxShadow: '0 2px 4px'}}>
                        style={{boxShadow:`0 2px 4px ${props.skillColor[index]}`}}>
                        {item}</button></a>)
            // </div>
            })}
        </div>
    </div>

    </>
}
function Skills(){
    const skillKeys = Object.keys(SKILLS[0]);
    const skillItems = skillKeys.flatMap((skillKey) => {
        return Object.values(SKILLS[0][skillKey]).map((skillItem) => {
        // const skillValues = Object.values(SKILLS[0][skillKey]).map((skillItem) => (
            // const skillArray = skillItem.skill
            //                     .split(' , '.trim())
            //                     .map((part) => part.trimStart())
            const skillArray = skillItem.skill
                                .split(' , '.trim())
                                .map((part) => part.trimStart())
            return (<SkillItem 
                id={skillItem?.id}
                key={skillItem?.id}
                // key={skillItem?.key}

                title={SKILL_DICT[skillKey]}
                // title={SKILL_DICT[skillItem]}
                skills={skillArray}
                skillColor={skillItem?.skillColor}
                skillLink={skillItem?.skillLink}
                // sj
                // skillColor={skillItem.}
                // id:{skillItem.id}
                // id={skillItem.id0}

            />)
                                // <SkillItem>

                                // .map((part) => {part.trimStart()})
            // console.log(skillArray);
            // const skillArray = skillItem[skill].split(',');
            // console.log(skillItem.skill)
            // console.log(skillArray);
        // })
        // ));
        // )})}
            });

        });
        // return (
    return (
        <React.Fragment>
            <div className={classes.skills}>
                {skillItems}
            </div>
        </React.Fragment>
    )
                    {/* </SkillItem> */}

        // {
                // return;
            // });
        // console.log(skillKey);
    // })
    // console.log(skillKeys);

}

export default Skills;
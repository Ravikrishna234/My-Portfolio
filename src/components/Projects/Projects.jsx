import React,{useState} from 'react';
import classes from './Projects.module.css';
import ProjectItem from './ProjectItem';
import Card from '../UI/Card';
import image1 from '../../assets/ProjectImages/Project-1-Image-1.png';

const PROJECT_APPLICATION = [{
  webFrontend: [
  {
    id: 'expensetracker',
    name: 'Expense Tracker',
    description: 'The Expense Tracker is a React application that helps you track your expenses.',
    briefDescription: `The Expense Tracker is a React application that helps you track your expenses. 
                You can add expenses by providing a title, amount, and date. The application provides visualizations 
                in the form of bar charts for each month of the year, allowing you to analyze your expenses over time. 
                You can also filter the expenses by year for a more focused view. Additionally, the application displays a list 
                of all expenses and supports switching between dark and light mode.`,
    github: 'https://github.com/Ravikrishna234/React-ExpenseTracker',
    projectImages: ['Project-1-Image-1.png'],
    technologyUsed: 'React JS, CSS 3',
    demoLink: 'https://lsrlpg.csb.app/',
    featured: false
    // featured: g
    // featured: False
    // g
  }, {
    id: 'onlinefoodshop',
    name: 'Online Food Shop',
    description: 'The Online Food Shop is a React application to explore and manage your favorite dishes.',
    briefDescription: `The Online Food Shop is a React application to explore and manage your favorite dishes.
                        The app offers a seamless user experience for food enthusiasts, allowing them to explore a variety of dishes,
                        add favorites to the cart, and effortlessly update their order along the way.`,
    github: 'https://github.com/Ravikrishna234/OnlineFoodShop',
    projectImages: ['Project-2-Image-1.png'],
    technologyUsed: 'React JS, CSS 3',
    demoLink: '',
    // featured: False
    // featured: True
    featured: true
  }, {
    id:'nasawebproject',
    name: 'NASA Celestial Snapshots',
    description: 'This web application allows you to fetch information and images related to astronomy using <b>NASA API.</b>',
    briefDescription: 'This web application allows you to fetch information and images related to astronomy using <b>NASA API.</b>', 
    github: 'https://github.com/Ravikrishna234/NASA_Web_Project',
    projectImages: ['Project-3-Image-1.png'],
    technologyUsed: 'HTML 5, CSS 3, Javascript',
    demoLink: 'https://nasa-web-assignment.vercel.app/',
    // featured: False
    featured: false
	}],
  webFullStack: [{}],
  mobileApplication: [{}],
  machineLearning: [{}]
}]

function Projects() {
  const filteredProjects = () => {
    setIsFeatured(true);
  }
  const filteredAllProjects = () =>{
    setIsFeatured(false);
  }
  const title_keys = ['webFrontend'] // Object.keys(PROJECT_APPLICATION[0])
  // const [featured]
  // const [isFeatured, setIsFeatured] = useState(False);
  const [isFeatured, setIsFeatured] = useState(false);
  // const 
  // let proh
  let projectsApplications = {}
  // let featuredButtonClassName = classes.featureButton;
  // let allProjectsButtonClassName = classes.featureButton;
  // allProjectsButtonClassName += `${classes.activeButton}`

  const projectItems = title_keys.flatMap((titleKey) => {
    if(isFeatured){
        // const 
        // projectsApplications =  PROJECT_APPLICATION[0][titleKey].filter((project)=> {
        projectsApplications =  PROJECT_APPLICATION[0][titleKey].filter((project)=> {
          return project.featured;
        });
        // });
        // featuredButtonClassName += `${classes.activeButton}`
        // featuredButtonClassName += `${CLASS}` 
        // featuredButtonfeaturedButtonClassName
        // projectsApplications
    } else {
      projectsApplications = PROJECT_APPLICATION[0][titleKey];
      // allProjectsButtonClassName = `${classes.featureButton}`
    }

    return Object.values(projectsApplications).map((item) => (
    // return Object.values(PROJECT_APPLICATION[0][titleKey]).map((item) => {
      <ProjectItem
        id={item?.id}
        key={item?.id}
        name={item?.name}
        description={item?.description}
        briefDescription={item?.briefDescription}
        github={item?.github}
        projectImages={item?.projectImages}
        technologiesUsed={item?.technologyUsed}
        demoLink={item?.demoLink}
        />
    // ));
    // });
    ));
  });

  return (
    <React.Fragment>
      {/* <div className='row'> */}
      <div className={classes.projects}>
      <button onClick={filteredProjects} className={`${classes.featureButton} ${isFeatured && classes.activeButton}`}>Featured</button>
      <button onClick={filteredAllProjects} className={`${classes.featureButton} ${!isFeatured && classes.activeButton}`}>All Projects</button>
      {/* <button onClick={filteredProjects} className={`${classes.featureButton} ${isFeatured && (classes.activeButton || '') }`}>Featured</button> */}
      {/* <button onClick={filteredProjects} className={`${classes.featureButton} ${isFeatured ? classes.activeButton : ''}`}>Featured</button> */}
      {/* <button onClick={filteredProjects} className={`${classes.featureButton} ${!isFeatured ? classes.activeButton : ''}`}>All Projects</button>} */}
      {/* <button onClick={filteredProjects} className={`${classes.featureButton} ${~isFeatured ? classes.activeButton : ''}`}>All Projects</button> */}
      {/* <button onClick={filteredProjects} className={`${classes.featureButton} ${!isFeatured && (classes.activeButton || '')}`}>All Projects</button> */}
      {/* <button onClick={filteredProjects} className={`${classes.featureButton} ${@isFeatured && classes.activeButton}`}>All Projects</button> */}
      {/* <button onClick={filteredAllProjects} className={`${classes.featureButton} ${}}`} */}
      {/* <button onClick={filteredProjects} className={`${classes.featureButton}` `${isFeatured && classes.activeButton}`}>Featured</button> */}
        {/* <button onClick={filteredProjects} className=`{${classes.featureButton}}>Featured</button> */}
      {/* <button onClick={filteredProjects} className={featuredButtonClassName}>Featured</button> */}
      {/* <button onClick={filteredAllProjects} className={allProjectsButtonClassName}>All Projects</button> */}

        {/* <button onClick={projectFilter} className={classes.featureButton}>Featured</button>  */}
        {/* <button onClick={filteredProjects} className={classes.featureButton}>Featured</button> */}
        {/* <button onClick={filteredAllProjects} className={classes.featureButton}>All Projects</button> */}
          {/* <div className='row'> */}
      {/* <div className='row'> */}

        {/* <div className={classes.projectsCards}> wrapper */}
        <div className={classes.projectCards}>        
      	  {projectItems}
        </div>
      </div>

      {/* 4 */}
    </React.Fragment>
  );
}
export default Projects;
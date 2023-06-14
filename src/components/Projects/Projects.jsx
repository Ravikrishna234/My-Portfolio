import React from 'react';
import classes from './Projects.module.css';
import ProjectItem from './ProjectItem';
import Card from '../UI/Card';

const PROJECT_APPLICATION = [{
	// title: 'Frontend',
// },
  webFrontend: [
    // {
    // title: 'Frontend'
  // }, 
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
    projectImages: [''],
    // texr
    technologyUsed: 'React JS, CSS 3',
    demoLink: 'https://lsrlpg.csb.app/'
  }, {
    id: 'onlinefoodshop',
    name: 'Online Food Shop',
    description: 'The Online Food Shop is a React application to explore and manage your favorite dishes.',
    briefDescription: `The Online Food Shop is a React application to explore and manage your favorite dishes.
                        The app offers a seamless user experience for food enthusiasts, allowing them to explore a variety of dishes,
                        add favorites to the cart, and effortlessly update their order along the way.`,
    github: 'https://github.com/Ravikrishna234/OnlineFoodShop',
    projectImages: [''],
    technologyUsed: 'React JS, CSS 3',
    demoLink: ''
  // }, {
  //   id: 'onlinefoodshop',
  //   name: 'Online Food Shop',
  //   description: 'The Online Food Shop is a React application to explore and manage your favorite dishes.',
  //   briefDescription: `The Online Food Shop is a React application to explore and manage your favorite dishes.
  //                       The app offers a seamless user experience for food enthusiasts, allowing them to explore a variety of dishes,
  //                       add favorites to the cart, and effortlessly update their order along the way.`,
  //   github: 'https://github.com/Ravikrishna234/OnlineFoodShop',
  //   projectImages: [''],
  //   technologyUsed: 'React JS, CSS 3'
  // }, {
  //   id: 'onlinefoodshop',
  //   name: 'Online Food Shop',
  //   description: 'The Online Food Shop is a React application to explore and manage your favorite dishes.',
  //   briefDescription: `The Online Food Shop is a React application to explore and manage your favorite dishes.
  //                       The app offers a seamless user experience for food enthusiasts, allowing them to explore a variety of dishes,
  //                       add favorites to the cart, and effortlessly update their order along the way.`,
  //   github: 'https://github.com/Ravikrishna234/OnlineFoodShop',
  //   projectImages: [''],
  //   technologyUsed: 'React JS, CSS 3'
  }],
  webFullStack: [{}],
  mobileApplication: [{}],
  machineLearning: [{}]
  // Mobile: [{}]
  // Machi
}]
function Projects() {
  // const title_keys = ['webFrontend'];
  const title_keys = ['webFrontend'] // Object.keys(PROJECT_APPLICATION[0])
  const projectItems = title_keys.flatMap((titleKey) => {
    return Object.values(PROJECT_APPLICATION[0][titleKey]).map((item) => (
      <ProjectItem
        id={item?.id}
        key={item?.id}
        name={item?.name}
        description={item?.description}
        briefDescription={item?.briefDescription}
        github={item?.github}
        // technologyUsed={}
        technologiesUsed={item?.technologyUsed}
        // demoLink: 
        demoLink={item?.demoLink}
        />
    ));
  });

  return (
    <React.Fragment>
      {/* <div className={classes.projectWrapper}> */}
      <div className={classes.projects}> {/* wrapper */}
        {/* <div className={classes.projectCard}> cards_wrap  */}
          {/* <Card> */}
            {/* <div className={classes.projectItem}> */}
              {projectItems}
            {/* </div> card_item */}
          {/* </Card> */}
        {/* </div> */}
      </div>
      {/* </div> */}
    </React.Fragment>
  );
  // Object.values(title_keys).map((titlekey) => {
    /* <section className={classes.projects}> {*/ // wrapper /*} */}
      // <section className={classes.projects}> {/* */|}
  //   // const projectItems = Object.values(PROJECT_APPLICATION[0][titlekey]).map((item, index) => {
  //     // const projectItems = PROJECT_APPLICATION[0][titlekey]).map((item) => {
  //       const projectItems = PROJECT_APPLICATION[0][titlekey].map((item) => {
  //     // console.log(item);
  //     // console.log(index);
  //     <ProjectItem
  //       id={item.id}
  //       key={item.id}
  //       name={item.name}
  //       // description={item/}></ProjectItem>
  //       // description={item.description><?
  //       description={item.description}
  //       briefDescription={item.briefDescription}
  //       github={item.github}></ProjectItem>
  //   })
  //   return <React.Fragment>
  //   <section className={classes.projects}>
  //     <div className={classes.projectCard}>
  //       <Card>{projectItems}</Card>
  //     </div>
  //   </section>
  // </React.Fragment>
  // })
  // Object.values(title_keys).map((titlekey) => {
    // const projectItems = PROJECT_APPLICATION.map((item) => {
      // console.log(Object.values(PROJECT_APPLICATION));
      // Object.values(PROJECT_APPLICATION).map((element) => {
        // Object.values(PROJECT_APPLICATION[0]['webFrontend'])

        // console.log(Object.values(PROJECT_APPLICATION[0][title_keys[0]]));

        // Object.values(PROJECT_APPLICATION[0][title_keys[0]]).map((item) => {
          // console.log(item);
        // })
        // console.log9
        // console.log(element);
        // console.log(titlekey);
        // console.log(element[titlekey]);
        // console.log(element.title_keys[0]);
      // });
      // +)
      // <ProjectItem
      // id={element[titlekey]}
      // ></ProjectItem>
      // const projectItems = titlekey.map((item) => {
      //   <ProjectItem
      //   id={item.titlekey.id}
      //   key={item.titlekey.id}
      //   name={item.titlekey.name}
      //   description={item.titlekey.description}
      //   briefDescription={item.titlekey.briefDescription}
      //   github={item.titlekey.github}
      //   images={item.titlekey.projectImages}>
      // </ProjectItem>
    // })
  //   return <React.Fragment>
  //   <section className={classes.projects}>
  //     <div className={classes.projectCard}>
  //       <Card>{projectItems}</Card>
  //     </div>
  //   </section>
  // </React.Fragment>
      // console.log(item);
      // <ProjectItem
      //   id={item.titlekey.id}
      //   key={item.titlekey.id}
      //   name={item.titlekey.name}
      //   description={item.titlekey.description}
      //   briefDescription={item.titlekey.briefDescription}
      //   github={item.titlekey.github}
      //   images={item.titlekey.projectImages}>
      // </ProjectItem>
  // })
 
// })
  
}
export default Projects;
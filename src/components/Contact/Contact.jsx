import React from 'react';
import ContactForm from './ContactForm';
import classes from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faEnvelope} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Contact(){
    // const saveContactDataHandler = (event) => {}
    const saveContactDataHandler = (enteredcontactdata) => {
        // console.log(enteredcontactdata)
        const contactData = {...enteredcontactdata};
    }
    // <div className={faChampagneGlasses.}></div>?
    return (<React.Fragment>
        <div className={classes.contactCardsWrapper}>
            {/* <div className={classes.emailCard}> */}
            <div className={classes.contactCards}>
            {/* </div> */}
            <div className={classes.contactCard}>
                {/* hello */}
                {/* <FontAwesomeIcon className={classes.envelopeIcon} icon={faEnvelope} size='2''1.5x'></FontAwesomeIcon> */}
                <FontAwesomeIcon icon={faEnvelope} size='2x'></FontAwesomeIcon>
                {/* <h4>Email</h4> */}
                <h3>Email</h3>
                <a 
                    className={classes.email} 
                    href="">
                        rxdontula@shockers.wichita.edu
                </a>
                {/* ,e */}
                {/* #</a> */}
                 {/* /> */}
            </div>
            {/* <div className={classes.linkedInCard}> */}
            <div className={classes.contactCard}>
                <FontAwesomeIcon icon={faLinkedin} size='2x'></FontAwesomeIcon>
                <h3>LinkedIn</h3>
                <a 
                    className={classes.email} 
                    href="https://www.linkedin.com/in/dontula-ravikrishna-905722165/">
                        Contact through Linkedin
                </a>
            </div>
            </div>
        </div>
        <ContactForm onSaveContactData={saveContactDataHandler}></ContactForm>
    </React.Fragment>)
}
export default Contact;
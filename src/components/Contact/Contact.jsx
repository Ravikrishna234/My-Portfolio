import React from 'react';
import ContactForm from './ContactForm';
import classes from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Contact(){
    const saveContactDataHandler = (enteredcontactdata) => {
        const contactData = {...enteredcontactdata};
    }
    return (<React.Fragment>
        <div className={classes.contactCardsWrapper}>
            <div className={classes.contactCards}>
            <div className={classes.contactCard}>
                <FontAwesomeIcon icon={faEnvelope} size='2x'></FontAwesomeIcon>
                <h3>Email</h3>
                <a 
                    className={classes.email} 
                    href="">
                         ravikrishnad.work@gmail.com
                </a>
            </div>
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
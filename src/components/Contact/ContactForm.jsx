import React,{useEffect, useState} from 'react';
import classes from './ContactForm.module.css';

function ContactForm(props){
    // const [enteredName, Set]
    const [enteredName, setEnteredName] = useState('');
    // const [enteredEnali]
    // const [ent]
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredSubject, setEnteredSubject] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [message, setMessage] = useState('');
    // const - p []
    // const [isMessageSent, setIsMessageSent] = useState(false);
    // fp
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
        // setEnteredName(eb)
    }
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }
    const subjectChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        setEnteredSubject(event.target.value);
    }
    const messageChangeHandler = (event) => {
        setEnteredMessage(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredName.length && enteredEmail.length && enteredSubject.length && enteredMessage){} (3)
        if(enteredName.length && enteredEmail.length && (enteredSubject.length || enteredMessage.length)) {
            // \\
        const contactData = {
            name:enteredName,
            email:enteredEmail,
            subject:enteredSubject,
            message:enteredMessage,
            date: new Date()
        }
        props.onSaveContactData(contactData);
        setMessage('Message Sent');
        setEnteredName('');
        setEnteredEmail('');
        setEnteredSubject('');
        setEnteredMessage('');
        // setI
    }
        // setEnteredName('');
        // setEnteredEmail('');
        // setEnteredSubject('');
        // setEnteredMessage('');
        // setIsMessageSent(true);
        // length

    }
    useEffect(()=>{
        let timer;
        // l
        if(message.length) {
            // const timer = setTimeout(()=>{
                // timer = setTimeout(()=>{
            timer = setTimeout(()=>{
                setMessage('');
            }, 5000);
        }
        return ()=>{clearTimeout(timer);}
    },[message])
        // b)
    return (<React.Fragment>
        <form onSubmit={submitHandler}>
        {/* <div ClassName={}> */}
        <div className={classes.contactFormWrapper}>
            <div className={classes.contactForm}>
                <div className={classes.basicForm}>
                {/* <div className={classes.basicForm}> */}
                {/* <div className='row'> */}
            {/* <div className={classes.nameFormControl}> */}
                    {/* <div className={classes.rowFormControl}> */}
                    <div className={classes.rowFormControl} style={{ marginRight:'20px' }}> 
                        <label htmlFor="Name">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            value={enteredName}
                            onChange={nameChangeHandler} required/>
                    </div>
                    {/* </div> */}
            {/* <div className={classes.emailFormControl}> */}
                    {/* <div className={classes.rowFormControl}> */}
                    <div className={classes.rowFormControl}> 
                        <label htmlFor="Email">Email</label>
                        <input
                            // type="text"
                            type="email"
                            placeholder="Your email"
                            value={enteredEmail}
                            onChange={emailChangeHandler} required/>
                    </div>
                        {/* // u */}
                    {/* </div> */}
                </div>
                <div className={classes.subjectForm}>
                    <label htmlFor="Subject">Subject</label>
                    <input
                        type="text"
                        placeholder="Subject"
                        value={enteredSubject}
                        onChange={subjectChangeHandler} />
                </div>
                <div className={classes.messageForm}>
                    <label htmlFor="Message">Message</label>
                    <textarea
                        placeholder="Message"
                        value={enteredMessage}
                        onChange={messageChangeHandler}></textarea>
                </div>
                {/* <div className={classes.formButton}> */}
                {/* <div className={classes.buttonContainer}> */}
                <div className={classes.endFormControl}>
                    {/* <div> */}
                        <button className={classes.formButton} type="submit"> Send Message </button>
                        {/* </div> */}
                    
                    {/* {message.length && <p>Your message was sent successfully.</p>}  */}
                    {message  && <div className={classes.sucessMessage}> 
                     {/* <p > */}
                        Your message was sent successfully.
                        {/* </p> */}
                    </div>}
                    {/* {}{} */}
                    {/* {isMessageSent && ( <p>Message sent!</p>  )}; */}
                    {/* { isMessageSent && <p>Message</p>} */}
                    {/* { isMessageSent && <p>Your message was sent successfully.</p>} */}
                </div>
            </div>
            
        </div>
        
    </form>
    </React.Fragment>)
    
}
export default ContactForm;
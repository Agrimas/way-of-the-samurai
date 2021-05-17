import React from 'react';
import Classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";


const Dialogs = function ({dialogsData, messagesData, sendMessage}) {
    let dialogsElements = dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                id={dialog.id}/>);

    let messagesElements = messagesData.map(message => <Message key={message.id} text={message.message}
                                                                isMy={message.isMy}/>)

    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={Classes.messagesContainer}>
                <div className={Classes.messagesBody}>
                    {messagesElements}
                </div>
                <DialogsForm sendMessage={sendMessage}/>
            </div>
        </div>
    );
}

const DialogsForm = ({sendMessage}) => {
    return (
        <Formik
            initialValues={{textarea: ''}}
            validationSchema={Yup.object({
                textarea: Yup.string()
                    .max(500, 'Must be 500 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, actions) => {
                sendMessage(values.textarea);
                actions.resetForm();
            }}>
            {({}) => (
                <Form className={Classes.formContainer}>
                    <Field id="textarea" name="textarea" className={Classes.formTextarea}/>
                    <ErrorMessage name="textarea" component="div"/>
                    <button type='submit'>Send</button>
                </Form>
            )}
        </Formik>
    );
}

export default Dialogs;
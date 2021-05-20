import React, {useState} from "react";
import {Formik, Field, Form} from 'formik';

const ProfileDataForm = ({profile, onSubmit}) => {
    const [showDescriptionSkills, setShowDescriptionSkills] = useState(profile.lookingForAJob);
    return (
        <div>
            <Formik
                initialValues={{
                    lookingForAJob: showDescriptionSkills,
                    lookingForAJobDescription: profile.lookingForAJobDescription,
                    fullName: profile.fullName,
                    aboutMe: profile.aboutMe,
                    contacts: profile.contacts
                }}
                onSubmit={onSubmit}
            >
                {({handleChange, isSubmitting}) => {
                    const lookingForAJobOnChangeHandler = (event) => {
                        event.currentTarget.checked ? setShowDescriptionSkills(true) :
                            setShowDescriptionSkills(false);
                        handleChange(event)
                    }
                    return (
                        <Form>
                            <div>
                                <label htmlFor="fullName">Full name</label><br/>
                                <Field name='fullName' type='text'
                                />
                            </div>
                            <div>
                                <label htmlFor="lookingForAJob">looking for a Job</label><br/>
                                <Field name='lookingForAJob' type='checkbox'
                                       onChange={lookingForAJobOnChangeHandler}
                                />
                            </div>
                            {showDescriptionSkills &&
                            <div>
                                <label htmlFor="lookingForAJobDescription">My professional
                                    skills</label><br/>
                                <Field name='lookingForAJobDescription' component='textarea'
                                />
                            </div>
                            }
                            <div>
                                <label htmlFor="aboutMe">About me</label><br/>
                                <Field name='aboutMe' component='textarea'
                                />
                            </div>
                            <div>
                                {Object.keys(profile.contacts).map(contact => {
                                        return <div>
                                            <label htmlFor="contact">{contact}</label>
                                            <br/>
                                            <Field key={contact}
                                                   name={`contacts.${contact}`}
                                                   type={'text'}
                                            />
                                        </div>
                                    }
                                )}
                            </div>
                            <button type={"submit"} disabled={isSubmitting}>Save</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default ProfileDataForm;
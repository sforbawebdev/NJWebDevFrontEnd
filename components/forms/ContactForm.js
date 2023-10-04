import {useRef, useState} from 'react';
import Button from '../../widgets/Button';
import Reveal from  '../../widgets/Reveal';
import React from "react";
import { useForm } from "react-hook-form";
import {postToCF} from '../../utilities/helpers';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import verifyCaptchaAction from '../../utilities/captcha';

const ContactForm = () =>{
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [submitState, setSubmitState] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async  data => {
            // if the component is not mounted yet
        if (!executeRecaptcha) {
            return
        }
        const token = await executeRecaptcha("onSubmit");
        
        const verified = await verifyCaptchaAction(token);
        if(verified) {
            const response = await postToCF(data);
            let status = response.status === "mail_sent";
            setSubmitState(status);
        }
    };
    return (

    <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Reveal preset={"fadeUp"} delay={50}>
            <div className="form__row">
                <div className="form__col full_width_col">
                    <label htmlFor="name">NAME*</label>
                    <input name="fullName" type="text" defaultValue="" {...register('fullName', { required: true })}/>
                    {errors && errors.fullname && <span className="error-field">This field is required</span>}
                </div>
            </div>
        </Reveal>
        <Reveal preset={"fadeUp"} delay={75}>
            <div className="form__row">
                <div className="form__col full_width_col">
                    <label htmlFor="email">E-MAIL*</label>
                    <input name="email" type="email" {...register('email', { required: true })} />
                    {errors && errors.email && <span className="error-field">This field is required</span>}
                </div>
            </div>
        </Reveal>
        <Reveal preset={"fadeUp"} delay={125}>
            <div className="form__row">
                <div className="form__col full_width_col">
                    <label htmlFor="subject">SUBJECT*</label>
                    <input name="subject" type="text" {...register('subject', { required: true })} />
                </div>
            </div>
        </Reveal>
        <Reveal preset={"fadeUp"} delay={150}>
            <div className="form__row">
                <div className="form__col full_width_col">
                    <label htmlFor="message">MESSAGE*</label>
                    <textarea name="message" type="text"  {...register('message', { required: true })} />
                    {errors && errors.message && <span className="error-field">This field is required</span>}
                </div>
            </div>
        </Reveal>

        {!submitState ? 
            (
            <Reveal preset={"fadeUp"} delay={175}>
                <div className="form__submit">
                    <Button onClick={handleSubmit(onSubmit)} text={"Submit"}/>
                </div>
            </Reveal>
            ) : (
                <Reveal preset={"fadeUp"} delay={175}>
                    <div className="success__message">
                        Thank you for your Submission!
                    </div>
                </Reveal>
            )
        }
    </form>
    );
}


export default ContactForm;
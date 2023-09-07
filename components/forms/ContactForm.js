import {useRef, useState} from 'react';
import Button from '../../widgets/Button';
import Reveal from  '../../widgets/Reveal';
import React from "react";
import { useForm } from "react-hook-form";
import {postToCF} from '../../utilities/helpers';
import { ReCaptcha} from 'react-recaptcha-v3'

const ContactForm = () =>{
    const recaptcha  = useRef(null);
    const [submitState, setSubmitState] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async  data => {
        const response = await postToCF(data);
        let status = response.status === "mail_sent";
        setSubmitState(status);
    };
    const verifyCallback = () => {
        console.log("recaptcha loaded");
    }

    const updateToken = () => {
    // you will get a new token in verifyCallback
    this.recaptcha.execute();
    }
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
        <Reveal preset={"fadeUp"} delay={100}>
            <div className="form__row">
                <div className="form__col full_width_col">
                    <label htmlFor="phone">PHONE*</label>
                    <input name="phone" type="tel" {...register('phone', { required: true })} />
                    {errors && errors.phone && <span className="error-field">This field is required</span>}
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
        <ReCaptcha
            ref={recaptcha}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
            action='action_name'
            verifyCallback={verifyCallback}
        />
    </form>
    );
}


export default ContactForm;
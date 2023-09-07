import React from 'react'
import { Waypoint } from 'react-waypoint';
import {AppContext} from '../providers/AppProvider';
import ContactForm from '../components/forms/ContactForm';
import Loading from '../components/Loading';
import Title from '../components/Title';
import { useQuery} from '@apollo/client';
import queries from '../utilities/queries';

const Contact = () => {
    const context = React.useContext(AppContext);
    const query = queries.CONTACT_DATA_QUERY();

    const { loading, error, data } = useQuery(query);

    if (loading){
        return <Loading />
    } 
    if (error) {
        console.log(error);
        return (<div />);
    }

    const page_data = data?.pages?.nodes[0]?.pageContent || {};

    const {title} = page_data;
    const handleWayPoint = () =>{
        context.setActiveNav("contact")
    }
    return (
        <div className="contact page" id={"contact"}>
            <Waypoint onEnter={handleWayPoint}/>
            <div className="contact__content">
                <Title text={title} color={"grey"} home={false}/>
                <div className="contact__form">
                    <ContactForm />
                </div>
            </div>  
        </div>
    );
}


export default Contact;
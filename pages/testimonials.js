import React from 'react'
import { Waypoint } from 'react-waypoint';
import {AppContext} from '../providers/AppProvider';
import { useQuery} from '@apollo/client';
import queries from '../utilities/queries';
import Loading from '../components/Loading';
import ClientList from '../components/ClientList';
import Title from '../components/Title';
// import "../styles/views/testimonials.scss";

const Testimonials = () => {
    const context = React.useContext(AppContext);
    const query = queries.TESTIMONIALS_DATA_QUERY();
    const { loading, error, data } = useQuery(query);

    if (loading){
        return <Loading />
    } 

    if (error) {
        console.log(error);
        return false;
    }
    const page_data = data?.pages?.nodes[0]?.pageContent || {};

    const {title} = page_data;
    const handleWayPoint = () =>{
        console.log(context.setActiveNav("testimonials"));
    }
    return (
        <div className="testimonials page" id={"testimonials"}>
            <Waypoint onEnter={handleWayPoint}/>
            <div className="testimonials__content">
                <Title text={title} color={"white"} home={false}/>
            </div>  
            <div>
                <ClientList />
            </div>
        </div>
    );
}


export default Testimonials;
import React from 'react'
import { Waypoint } from 'react-waypoint';
import {AppContext} from '../providers/AppProvider';
import { useQuery} from '@apollo/client';
import queries from '../utilities/queries';
import Loading from '../components/Loading';
import ServiceList from '../components/ServiceList';
import Title from '../components/Title';

const Services = () => {
    const context = React.useContext(AppContext);
    const query = queries.SERVICES_QUERY();
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
        console.log(context.setActiveNav("services"));
    }
    return (
        <div className="services page" id={"services"}>
            <Waypoint onEnter={handleWayPoint}/>
            <div className="services__content">
                <Title text={'Services'} color={"grey"} home={false}/>
            </div>  
            <ServiceList />
        </div>
    );
}


export default Services;
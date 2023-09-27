import React from 'react'
import { Waypoint } from 'react-waypoint';
import {AppContext} from '../providers/AppProvider';
import { useQuery} from '@apollo/client';
import queries from '../utilities/queries';
import Loading from '../components/Loading';
import Title from '../components/Title';
import TechList from '../components/TechList';
const Technology = () => {
    const context = React.useContext(AppContext);
    const query = queries.TECHNOLOGY_DATA_QUERY();
    const { loading, error, data } = useQuery(query);

    if (loading){
        return <Loading />
    } 

    if (error) {
        console.log(error);
        return false;
    }

    const page_data = data?.pages?.nodes[0]?.pageContent || {};
    console.log(page_data);
    const {title} = page_data;
    const handleWayPoint = () =>{
        console.log(context.setActiveNav("technology"));
    }
    return (
        <div className="technology page" id={"tech"}>
            <Waypoint onEnter={handleWayPoint}/>
            <div className="tecnology__content">
                <Title text={title} color={"grey"} home={false}/>
            </div>
            <TechList />
        </div>
    );
}

export default Technology;
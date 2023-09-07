import React from 'react'
import { Waypoint } from 'react-waypoint';
import {AppContext} from '../providers/AppProvider';
import { useQuery} from '@apollo/client';
import queries from '../utilities/queries';
import Loading from '../components/Loading';
import ProjectList from '../components/ProjectList';
import Title from '../components/Title';
// import "../../styles/views/portfolio.scss";

const Portfolio = () => {
    const context = React.useContext(AppContext);
    const query = queries.PORTFOLIO_DATA_QUERY();
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
        console.log(context.setActiveNav("portfolio"));
    }
    return (
        <div className="portfolio page" id={"portfolio"}>
            <Waypoint onEnter={handleWayPoint}/>
            <div className="portfolio__content">
                <Title text={title} color={"white"} home={false}/>
            </div>  
            <ProjectList />
        </div>
    );
}


export default Portfolio;
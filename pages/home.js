import React from 'react'
import { Waypoint } from 'react-waypoint';
import {AppContext} from '../providers/AppProvider';
import { useQuery} from '@apollo/client';
import Loading from '../components/Loading';
import Reveal from '../widgets/Reveal';
import Title from '../components/Title';
import SocialList from '../components/SocialList';
import queries from '../utilities/queries';
// import "../../styles/views/home.scss";

const Home = () => {
    const context = React.useContext(AppContext);
    const query = queries.HOME_DATA_QUERY();
    const { loading, error, data } = useQuery(query);

    if (loading){
        return <Loading />
    } 
    if (error) {
        console.log(error);
        return (<div />);
    }

    const page_data = data?.pages?.nodes[0]?.pageContent || {};

    const {copy} = page_data;
    const handleWayPoint = () =>{
        context.setActiveNav("home")
    }
    return (
        <div className="home page">
            <Waypoint onEnter={handleWayPoint}/>
            <div className="home__content" id={"home"}>

                <Title text={"SCOTT FORBA"} color={"white"} home={true}/>
                <Reveal preset={"fadeUp"} delay={150}>
                    <div  className="home__copy" dangerouslySetInnerHTML={{__html:copy}}/>  
                </Reveal>
                <SocialList />
            </div>  
        </div>
    );
}


export default Home;
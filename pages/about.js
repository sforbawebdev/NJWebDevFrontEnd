import React from 'react'
import { Waypoint } from 'react-waypoint';
import {AppContext} from '../providers/AppProvider';
import { useQuery} from '@apollo/client';
import Loading from '../components/Loading';
import Title from '../components/Title';
import Reveal from '../widgets/Reveal';
import queries from '../utilities/queries';
import ServiceList from '../components/ServiceList';

const About = () => {
    const context = React.useContext(AppContext);
    const query = queries.ABOUT_DATA_QUERY();
    const { loading, error, data } = useQuery(query);
    if (loading){
        return <Loading />
    } 
    if (error) {
        console.log(error);
        return (<div />);
    }

    const page_data = data?.pages?.nodes[0]?.pageContent || {};

    const {title, copy} = page_data;
    // const handleButtonClick = () =>{
    //     const element = document.getElementById("contact");
    //     element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); 
    // }
    const handleWayPoint = () =>{
        context.setActiveNav("about")
    }
    return (
        <div className="about page" id={"about"}>
            <Waypoint onEnter={handleWayPoint}/>
            <div className="about__content">
                <Title text={title} color={"grey"}/>
                <Reveal preset={"fadeUp"} delay={150}>
                    <div  className="about__copy" dangerouslySetInnerHTML={{__html:copy}}/>  
                </Reveal>
            </div>  
            <ServiceList />
            
                <div className={'about__cta'}>
                    {/* <Reveal preset={"fadeUp"} delay={200}>
                        <Button text={"Hire Me!"} onClick={handleButtonClick} />
                    </Reveal> */}
                </div>
        </div>
    );
}


export default About;
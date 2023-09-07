import ServiceCard from './cards/ServiceCard';
import { useQuery} from '@apollo/client';
import queries from '../utilities/queries';
import Reveal from "../widgets/Reveal";
// import "../../styles/views/contact.scss";

const ServiceList = () => {
    const query = queries.SERVICES_QUERY();
    const { loading, error, data } = useQuery(query);
    if (loading) return ('Loading...');
    if (error) {
        console.log(error);
        return (<div />);
    }
    const service_data = data?.services?.nodes;   
    return (
        <div className="service-list-wrap">
            <ul className="service-list">
                {
                    service_data && service_data.map((item, index)=>{
                        const service = item.ServiceContent;
                        return(
                            <Reveal key={index}  preset={"fadeUp"} delay={(index * 50)}>
                                <li className="service-list-item">
                                    <ServiceCard service={service} />
                                </li>       
                            </Reveal>    
                        )
                    })
                }
            </ul>
        </div>
    );
}


export default ServiceList;
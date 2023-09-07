import RightArrow from "../widgets/arrows/RightArrow";
import LeftArrow from "../widgets/arrows/LeftArrow";
import ClientCard from './cards/ClientCard';
import { useQuery} from '@apollo/client';
import Slick from "react-slick";
import queries from '../utilities/queries';
import Reveal from "../widgets/Reveal";
// import "../../styles/views/testimonials.scss";

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    draggable: false,
    swipe:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div><RightArrow /></div>,
    prevArrow: <div><LeftArrow /></div>
}; 
const ClientList = () => {
    const query = queries.CLIENTS_QUERY();
    const { loading, error, data } = useQuery(query);
    if (loading) return ('Loading...');
    if (error) {
        console.log(error);
        return (<div />);
    }
    const client_data = data.clients.nodes;
    
    return (
        <Reveal preset={"fadeUp"} delay={100}>
            <div className="client-list-wrap">
                <Slick  {...settings} className={"client-slider"}>
                    {
                        client_data && client_data.map((item, index)=>{
                            const client = item.ClientContent;
                            return(
                                <div key={index} className="client-list-item">
                                    <ClientCard client={client} />
                                </div>           
                            )
                        })
                    }
                </Slick>
            </div>
        </Reveal>
    );
}


export default ClientList;
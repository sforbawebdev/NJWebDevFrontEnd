import { useQuery} from '@apollo/client';
import queries from '../utilities/queries';
import Image from 'next/image';
import Reveal from "../widgets/Reveal";

const TechList = () => {
    const query = queries.TECH_QUERY();
    const { loading, error, data } = useQuery(query);
    if (loading) return ('Loading...');
    if (error) {
        console.log(error);
        return (<div />);
    }
    const tech_data = data.technologies.nodes;

    const renderList = (data)=>{
        return data && data.map((item, index)=>{
            const {technology } = item || {};
            const {image, title, copy} = technology || {};
            const {mediaItemUrl, altText, mediaDetails} = image || {};

            return (
                <Reveal key={index}  preset={"fadeUp"} delay={(index * 50)}>
                    <li className="tech-list__item">
                        <Image src={mediaItemUrl} width={mediaDetails?.width} height={mediaDetails?.height} alt={altText}/>
                    </li>           
                </Reveal>
            )
        })
    }

    const tech = renderList(tech_data);  
    return (
        <div className="tech-list-wrap">
            <ul className="tech-list">
                {tech}
            </ul>
        </div>
    );
}

export default TechList;
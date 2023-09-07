import Icon from '../components/icons';
import { useQuery} from '@apollo/client';
import queries from '../utilities/queries';
import Reveal from "../widgets/Reveal";
// import "../../styles/components/_social-list.scss";

const renderList = (data)=>{
    return data && data.map((item, index)=>{
        const social = item?.SocialContent || {};
    
        let {name, url} = social;
        name = name?.toLowerCase();

        return (
            <Reveal key={index}  preset={"fadeUp"} delay={(index * 50)}>
                <li className="social-list__item">
                    <a className="social-list__link" href={url} rel="noreferrer" target="_blank">
                        <div className="social-list__icon">
                            <Icon name={name} type={name === 'upwork' ||  name === 'fiverr' ? 'svg':'fa'}/>
                        </div>
                    </a>
                </li>           
            </Reveal>
        )
    })
}

const SocialList = () => {
    const query = queries.SOCIALS_QUERY();
    const { loading, error, data } = useQuery(query);
    if (loading) return ('Loading...');
    if (error) {
        console.log(error);
        return (<div />);
    }
    const social_data = data.socials.nodes;
    const socials = renderList(social_data);  
     
    return (
        <div className="social-list-wrap">
            <ul  className="social-list">
                {socials}
            </ul>
        </div>
    );
}


export default SocialList;
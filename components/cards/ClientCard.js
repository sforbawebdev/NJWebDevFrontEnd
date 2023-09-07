import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "../../widgets/Image";
// import "../../../styles/components/_clients.scss";

const ClientCard = (props) => {
    const {client} = props;
    const {image, person, copy, linkedin, twitter, website} = client;
    return (
        <div className="client-card card">
            <div className="client-card__copy" dangerouslySetInnerHTML={{__html: copy}} />
            <div className="client-card__image">
             {image && <Image type={"element"} src={image}/>}
            </div>
            <h5 className="client-card__person">
                {person}
            </h5>
            <div className="client-card__title">

            </div>
            <ul className="client-card__social-list">

                {linkedin && 
                    <li className="client-card__social-list-item">
                        <a href={linkedin} className="client-card__social-link" target={"_blank"} rel={"noreferrer"} >
                            <div className="client-card__icon">
                                <FontAwesomeIcon icon={['fab', 'linkedin'] } />
                            </div>
                        </a>
                    </li>
                }
                {twitter && 
                    <li className="client-card__social-list-item">
                        <a href={twitter} className="client-card__social-link" target={"_blank"}  rel={"noreferrer"} >
                            <div className="sclient-card__icon">
                                <FontAwesomeIcon icon={['fab', 'twitter'] } />
                            </div>
                        </a>
                    </li>
                }
                {website && 
                    <li className="client-card__social-list-item">
                        <a href={website} className="client-card__social-link" target={"_blank"}  rel={"noreferrer"}>
                            <div className="client-card__icon">
                                <FontAwesomeIcon icon={['fas', 'window-maximize']} />
                            </div>
                        </a>
                    </li>
                }
            </ul>          
        </div>
    );
}


export default ClientCard;    
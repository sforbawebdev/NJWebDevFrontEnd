import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fontSetter} from '../../utilities/helpers';
// import "../../../styles/components/_services.scss";
import '../../utilities/fontawesome-config';


const ServiceCard = (props) => {
    const {service} = props;
    const {title, icon, copy} = service;

    const icon_array = icon && fontSetter(icon.toLowerCase());
    return (
        <div className="service-card card">
            <div className="service-card-icon">
                {icon_array && <FontAwesomeIcon icon={icon_array} />}
            </div>
            <h3 className="service-card__title">{title}</h3>
            <div className="service-card__copy" dangerouslySetInnerHTML={{__html: copy}}/>
        </div>
    );
}


export default ServiceCard;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fontSetter} from '../../utilities/helpers';
import '../../utilities/fontawesome-config';


const FontAwesome = (props)=>{
    const {name} = props;
    const icon = fontSetter(name);
    return(
        <FontAwesomeIcon icon={icon} />
    )
}

export default FontAwesome;

import FontAwesome from "./FontAwesome";
import SVG from "./SVG";

const Icon = (props)=> {
    const { type, name } = props;
    if (type=== "fa") {
      return <FontAwesome name={name} />;
    } else {
      return <SVG name={name}/>;
    }
}

export default Icon;
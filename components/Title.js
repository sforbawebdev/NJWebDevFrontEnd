// import "../../styles/components/_title.scss";
import Reveal from "../widgets/Reveal";

const Title = (props) => {
    const {text, color, home} = props;
    return (
        <Reveal preset={"fadeUp"} delay={100}>
            <h1 className={`title ${color} ${home ? "home" : null}`}>
                {text}
            </h1>
        </Reveal>
    );
}

  export default Title;

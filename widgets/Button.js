// import "../../styles/widgets/_button.scss";


const Button = (props)=> {
    const {className, onClick, ariaLabel, tabIndex, text} = props;
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
            aria-label={ariaLabel}
            tabIndex={tabIndex}
        >
            {text}
        </button>
    );
}
export default Button;
// import "../../../styles/widgets/_arrows.scss";

const RightArrow = (props) => {
  const { onClick} = props;

  return (
    <div
      className={'arrow right'}
      role="button"
      onClick={onClick}
    >
      <span></span>
      <span></span>
    </div>
  );
};


export default RightArrow;
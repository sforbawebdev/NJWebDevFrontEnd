// import "../../styles/widgets/_image.scss";

const Image = (props) => {
    const {type, src, className, children, alt} = props;
    return type === 'background' ? (
      <div
        className={ `image image--${ type } ${ className }` }
        style={{
          backgroundImage: `url('${ src }')`
        }}>
          { children && (
            <div className="image__inner">{ children }</div>
          ) }
        </div>
    ) : (
      <img
        alt={ alt }
        className={ `image image--${ type } ${ className }` }
        src={ src } />
    )
}

  export default Image;

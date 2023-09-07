import Image from 'next/image';

const ProjectModal = ({project}) =>{
    console.log(project);
    const {title, description, url, image} = project;
    console.log(url)
    return(
        <div className={"project-modal"}>
            <div className={"project-modal__title-row"}>
                <h3>{title}</h3>
            </div>
            <div className={"project-modal__content-row"}>
                <div className={"project-modal__carousel"}>
                    <div  className={"project-modal__carousel_item"}>
                        {image && image.sourceUrl && <img src={image.sourceUrl} />}
                    </div>

                </div>
                <div className={"project-modal__description"}>
                    <h4>Project Description</h4>
                    <p>{description}</p>
                    <a href={url} target="_blank" rel="noreferrer">
                        Visit Site
                    </a>

                </div>
            </div>
        </div>
    )
}

export default ProjectModal;
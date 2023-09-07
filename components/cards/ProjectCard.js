import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModal } from '../../providers/ModalProvider';
import ProjectModal from '../modals/ProjectModal';
import Image from 'next/image';
// import "../../../styles/components/_projects.scss";
import '../../utilities/fontawesome-config';

const ProjectCard = (props) => {
    const {project} = props;
    const { setModal } = useModal();
    const {url, title, image} = project;

    const handleClick = e =>{
        e.preventDefault();
        setModal(<ProjectModal project={project}/>);
    }
    return (
        <div className="project-card card">
            {image && 
            image.sourceUrl && 
                (
                    <img 
                        src={image.sourceUrl}
                        className="project-card__background"
                    />
                )
            }
            <div className="project-card__links-overlay">
                <div className="project-card__link-list">
                    <a href={url} className="project-card__link out" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={['fas', 'link']} />
                    </a>
                    <button onClick={handleClick} className="project-card__link modal">
                        <FontAwesomeIcon icon={['fas', 'search']} />
                    </button>
                </div>


            </div>
            <div className="project-card__title-overlay">
                <h3 className="project-card__title">
                    <a href={url}>
                    {title}
                    </a>
                </h3>
            </div>

        </div>
    );
}


export default ProjectCard;
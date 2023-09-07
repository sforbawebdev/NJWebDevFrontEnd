import ProjectCard from './cards/ProjectCard';
import { useQuery} from '@apollo/client';
import queries from '../utilities/queries';
import Reveal from "../widgets/Reveal";
// import "../../styles/views/portfolio.scss";

const ProjectList = () => {
    const query = queries.PROJECTS_QUERY();
    const { loading, error, data } = useQuery(query);
    if (loading) return ('Loading...');
    if (error) {
        console.log(error);
        return (<div />);
    }
    
    const project_data = data?.projects?.nodes; 
    return (
        <div className="project-list-wrap">
            <div className="project-list">
                {
                project_data && project_data.map((item, index)=>{
                    const project = item.ProjectContent;
                    return(
                        <Reveal key={index}  preset={"fadeUp"} delay={(index * 50)}>
                            <div className="project-list-item">
                                <ProjectCard project={project} />
                            </div>           
                        </Reveal>
                    )
                })
                }
            </div>
        </div>
    );
}


export default ProjectList;
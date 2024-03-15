import './ProjectInfo.css'
import { useDispatch, useSelector } from 'react-redux';
import { projectinfobox, delselectedproject, noselectedproject } from '../actions';

function ProjectInfo() {
    const currSelectedProject = useSelector(state => state.currSelectedProject);
    const dispatch = useDispatch();

    function delSelectedProject() {
        dispatch(delselectedproject(currSelectedProject))
        dispatch(noselectedproject())
    }

    return (
        <>
            <div id='project-info-container'>
                <button
                    id='project-del-btn'
                    onClick={()=>delSelectedProject()}
                    >Delete Project</button>
                <button
                    id='project-info-close-btn'
                    onClick={()=>dispatch(projectinfobox())}
                    >X</button>
            </div>
        </>
    )
}
export default ProjectInfo;
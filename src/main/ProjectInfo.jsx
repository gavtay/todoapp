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
                    className='project-btn'
                    onClick={()=>delSelectedProject()}
                    >Delete Project</button>
                <button
                    id='project-info-close-btn'
                    className='project-btn'
                    onClick={()=>dispatch(projectinfobox())}
                    >X</button>
            </div>
        </>
    )
}
export default ProjectInfo;
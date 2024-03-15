import './ProjectInfo.css'
import { useDispatch } from 'react-redux';
import { projectinfobox } from '../actions';

function ProjectInfo() {
    const dispatch = useDispatch();

    return (
        <>
            <div id='project-info-container'>
                <button id='project-del-btn'>Delete Project</button>
                <button
                    id='project-info-close-btn'
                    onClick={()=>dispatch(projectinfobox())}
                    >X</button>
            </div>
        </>
    )
}
export default ProjectInfo;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import './Project.css';

const addProjectList = <FontAwesomeIcon id="plus-icon" icon={faListUl} style={{color: "#8f8b81"}} />

function Project({ name }) {
    return (
        <>
            <div id="project-container">
                <button id='project-btn'>{addProjectList} {name}</button>
                <p id='project-task-num'>6</p>
            </div>
        </>
    )
}
export default Project;
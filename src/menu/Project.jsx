import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { newselectedproject } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './Project.css';

const addProjectList = <FontAwesomeIcon id="plus-icon" icon={faListUl} style={{color: "#8f8b81"}} />

function Project({ name }) {
    const projectArray = useSelector(state => state.projectArray)
    const dispatch = useDispatch();

    function getListNum() {
        const projectObj = projectArray.map((project) => {
            if (project.projectName === name) {
                return project.list;
            }
        })

        console.log(projectObj);
        for (let i = 0; i < projectObj.length; ++i) {
            return projectObj[i].length;
        }
    }


    return (
        <>
            <div id="project-container">
                <button
                    id='project-btn'
                    onClick={()=>dispatch(newselectedproject(name))}>
                        {addProjectList} {name}
                </button>
                {/* <p id='project-task-num'>{getListNum()}</p> */}
            </div>
        </>
    )
}
export default Project;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { showaddproject, updateaddprojectinput, clearaddprojectinput, addproject } from '../actions';
import './AddProject.css';

const addProjectCheck = <FontAwesomeIcon id="plus-icon" icon={faCheck} style={{color: "#10ce29"}} />
const addProjectClose = <FontAwesomeIcon id="plus-icon" icon={faX} style={{color: "#ff0000"}} />

function AddProject() {
    const addProjectInput = useSelector(state => state.updateAddProjectInput)
    const dispatch = useDispatch();

    function closeAddProject() {
        dispatch(showaddproject());
        dispatch(clearaddprojectinput());
    }

    function addTheProject() {
        dispatch(addproject(addProjectInput));
        dispatch(showaddproject());
        dispatch(clearaddprojectinput());
    }

    function changeAddProjectInput(event) {
        dispatch(updateaddprojectinput(event.target.value));
    }

    return (
        <>
            <div id='addproject-container'>
                <input id='addproject-input' placeholder='Project Name' value={addProjectInput} onChange={(event)=>changeAddProjectInput(event)}></input>
                <div id='addproject-btn-container'>
                    <button id='check-btn' className='addproject-btn' onClick={addTheProject}>{addProjectCheck}</button>
                    <button id='cancel-btn' className='addproject-btn' onClick={closeAddProject}>{addProjectClose}</button>
                </div>
            </div>
        </>
    )
}
export default AddProject;
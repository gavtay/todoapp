import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { showaddproject } from '../actions';
import './AddProject.css';

const addProjectCheck = <FontAwesomeIcon id="plus-icon" icon={faCheck} style={{color: "#10ce29"}} />
const addProjectClose = <FontAwesomeIcon id="plus-icon" icon={faX} style={{color: "#ff0000"}} />

function AddProject() {
    const dispatch = useDispatch();

    function closeAddProject() {
        dispatch(showaddproject());
    }

    return (
        <>
            <div id='addproject-container'>
                <input id='addproject-input' placeholder='Project Name'></input>
                <div id='addproject-btn-container'>
                    <button id='check-btn' className='addproject-btn'>{addProjectCheck}</button>
                    <button id='cancel-btn' className='addproject-btn' onClick={closeAddProject}>{addProjectClose}</button>
                </div>
            </div>
        </>
    )
}
export default AddProject;
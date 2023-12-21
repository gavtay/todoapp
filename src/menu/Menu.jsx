import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { showaddproject, clearaddprojectinput } from '../actions';
import AddProject from './AddProject.jsx';
import Project from './Project.jsx';
import './Menu.css';

const menuSearch = <FontAwesomeIcon id="plus-icon" icon={faMagnifyingGlass} style={{color: "#8f8b81"}} />

function Menu() {
    const showProject = useSelector(state => state.showAddProject);
    const projectArray = useSelector(state => state.projectArray);
    const dispatch = useDispatch();

    function showAddProjectBox() {
        dispatch(showaddproject());
        if (showProject === true) { dispatch(clearaddprojectinput())}
    }
    
    function ifAddProjectTrue() {
        if (showProject) {
            return (<AddProject />)
        }
    }
    
    function populateProjects() {
        return (
            <>
                {
                    projectArray.map((project) => (
                        <Project name={project.projectName} />
                    ))
                }
            </>
        )
    }

    return (
        <>
            <div id='menu-container'>
                <div id='menu-search-header-container'>
                    <h2>Search</h2>
                    <p>{menuSearch}</p>
                </div>
                <div id='search-container'>
                    <input
                        type='text'
                        id='search-input'
                        placeholder='Search'
                        autoComplete='off'>
                    </input>
                </div>
                <div id='projects-container'>
                    <div id='projects-head-btn-container'>
                        <h2 id='projects-header'>Projects</h2>
                        <button id='projects-add-btn' onClick={showAddProjectBox}>+</button>
                    </div>
                    <div>
                        {ifAddProjectTrue()}
                        {populateProjects()}
                    </div>
                </div>
                <button id='projects-archived-btn'>Archived Projects</button>
            </div>
        </>
    )
}
export default Menu;
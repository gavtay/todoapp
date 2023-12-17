import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Project from '../Project';
import './Menu.css';

const menuSearch = <FontAwesomeIcon id="plus-icon" icon={faMagnifyingGlass} style={{color: "#8f8b81"}} />

function Menu() {
    return (
        <>
            <div id='menu-container'>
                <div id='menu-search-header-container'>
                    <h2>Search</h2>
                    <p>{menuSearch}</p>
                </div>
                <div id='search-container'>
                    <input type='text' id='search-input' placeholder='Search' autoComplete='off'></input>
                </div>
                <div id='projects-container'>
                    <div id='projects-head-btn-container'>
                        <h2 id='projects-header'>Projects</h2>
                        <button id='projects-add-btn'>+</button>
                    </div>
                    <div>
                        <Project />
                        <Project />
                        <Project />
                    </div>
                </div>
                <button id='projects-archived-btn'>Archived Projects</button>
            </div>
        </>
    )
}
export default Menu;
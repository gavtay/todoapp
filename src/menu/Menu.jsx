import Project from '../Project';
import './Menu.css';

function Menu() {
    return (
        <>
            <div id='menu-container'>
                <div id='search-container'>
                    <input type='text' id='search-input' placeholder='Icon Search'></input>
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
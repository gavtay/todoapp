import ListItem from './ListItem';
import NewListItem from './NewListItem';
import ProjectInfo from './ProjectInfo';
import { useSelector, useDispatch } from 'react-redux';
import './Main.css';
import { projectinfobox } from '../actions';

function Main() {
    const currSelectedProject = useSelector(state => state.currSelectedProject);
    const projectArray = useSelector(state => state.projectArray);
    const projectInfoBox = useSelector(state => state.projectInfoBox)
    const dispatch = useDispatch();
    let projectInd;

    function populateProjectInfo() {

        if (currSelectedProject !== 'No Project Selected') {
            if (projectInfoBox === true) {
                return (
                    <>
                        <ProjectInfo />
                    </>
                )
            }
            else {
                return (
                    <button 
                    id='main-more-btn'
                    onClick={()=>dispatch(projectinfobox())}
                    >...
                    </button>
                )
            } 
        }
    }

    function populateList() {
        const selectedProjectList = projectArray.map((project, index) => {
            if (project.projectName === currSelectedProject) {
                projectInd = index;
                return project.list;
            }
        });

        if (currSelectedProject !== 'No Project Selected') {
            if (selectedProjectList[projectInd].length === 0) {
                return (
                    <>
                        <p>There are no items in the list for this project.</p>
                        <NewListItem />
                    </>
                )
            }
            else {
                const newList = selectedProjectList[projectInd].map(item => {
                    return ( <ListItem name={item}/> )
                });
                return (
                    <>
                        {newList}
                        <NewListItem />
                    </>
                )
            }
        }                   
    }

    return (
        <>
            <div id='main-container'>
                <div id='main-header-container'>
                    <h1>{currSelectedProject}</h1>
                    {populateProjectInfo()}
                </div>
                <div id='main-list-container'>
                    {populateList()}
                </div>
            </div>
        </>
    )
}
export default Main;
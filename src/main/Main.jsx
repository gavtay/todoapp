import ListItem from './ListItem';
import NewListItem from './NewListItem';
import { useSelector } from 'react-redux';
import './Main.css';

function Main() {
    const currSelectedProject = useSelector(state => state.currSelectedProject);
    const projectArray = useSelector(state => state.projectArray);
    
    function populateList() {
        const selectedProjectList = projectArray.map((project) => {
            if (project.projectName === currSelectedProject) {
                return project.list;
            }
        });

    //    const newList = selectedProjectList[0];

        if (currSelectedProject !== 'No Project Selected') {

            if (selectedProjectList[0].length === 0) {
                return (
                    <>
                        <p>There are no items in the list for this project.</p>
                        <NewListItem />
                    </>
                )
            }
            // make the list items appear ???
            else {
                const newList = selectedProjectList[0].map(item => {
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
                    <button id='main-more-btn'>...</button>
                </div>
                <div id='main-list-container'>
                    {populateList()}
                </div>
            </div>
        </>
    )
}
export default Main;
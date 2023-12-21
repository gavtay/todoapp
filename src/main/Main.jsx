import ListItem from './ListItem';
import NewListItem from './NewListItem';
import { useSelector } from 'react-redux';
import './Main.css';

function Main() {

    const currSelectedProject = useSelector(state => state.currSelectedProject)

    function populateNewListItem() {
        if (currSelectedProject !== 'No Project Selected') {
            return ( <NewListItem />)
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
                    {/* <ListItem />
                    <ListItem />
                    <ListItem /> */}
                </div>
                {populateNewListItem()}
            </div>
        </>
    )
}
export default Main;
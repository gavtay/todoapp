import ListItem from './ListItem';
import NewListItem from '../NewListItem';
import './Main.css';

function Main() {
    return (
        <>
            <div id='main-container'>
                <div id='main-header-container'>
                    <h1>Grocery Shopping List</h1>
                    <button id='main-more-btn'>...</button>
                </div>
                <div id='main-list-container'>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <NewListItem />
            </div>
        </>
    )
}
export default Main;
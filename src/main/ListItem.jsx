import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ListItem.css';

const itemTrash = <FontAwesomeIcon id="plus-icon" icon={faTrash} style={{color: "ff0000"}} />

function ListItem({ name }) {
    function deleteListItem(event) {
        // get the task index in the list, delete it
        console.log(event);
    }
    
    return (
        <>
            <div id='list-item-container'>
                <div id='list-item-check-name-container'>
                    <input id='list-item-checkbox' type='checkbox'></input>
                    <p id='list-item-name'>{name}</p>
                </div>
                <button id='list-item-delete-btn' onClick={()=>deleteListItem(event)}>{itemTrash}</button>
            </div>
        </>
    )
}
export default ListItem;
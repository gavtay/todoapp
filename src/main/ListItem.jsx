import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ListItem.css';

const itemTrash = <FontAwesomeIcon id="plus-icon" icon={faTrash} style={{color: "ff0000"}} />

function ListItem() {
    return (
        <>
            <div id='list-item-container'>
                <div id='list-item-check-name-container'>
                    <input id='list-item-checkbox' type='checkbox'></input>
                    <p id='list-item-name'>Chicken</p>
                </div>
                <button id='list-item-delete-btn'>{itemTrash}</button>
            </div>
        </>
    )
}
export default ListItem;
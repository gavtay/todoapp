import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { dellistitem } from '../actions';
import './ListItem.css';

const itemTrash = <FontAwesomeIcon id="plus-icon" icon={faTrash} style={{color: "ff0000"}} />

function ListItem({ name }) {
<<<<<<< HEAD
    const dispatch = useDispatch;
    // onclick dispatch delete 
    function deleteItem() {
        dispatch(dellistitem(name));
    } 

=======
    function deleteListItem(event) {
        // get the task index in the list, delete it
        console.log(event);
    }
    
>>>>>>> eca45f919a1030b00d41d64be85dfdf495ef7cc5
    return (
        <>
            <div id='list-item-container'>
                <div id='list-item-check-name-container'>
                    <input id='list-item-checkbox' type='checkbox'></input>
                    <p id='list-item-name'>{name}</p>
                </div>
<<<<<<< HEAD
                <button id='list-item-delete-btn'
                    onClick={deleteItem}
                >{itemTrash}</button>
=======
                <button id='list-item-delete-btn' onClick={()=>deleteListItem(event)}>{itemTrash}</button>
>>>>>>> eca45f919a1030b00d41d64be85dfdf495ef7cc5
            </div>
        </>
    )
}
export default ListItem;
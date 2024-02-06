import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { dellistitem } from '../actions';
import './ListItem.css';

const itemTrash = <FontAwesomeIcon id="plus-icon" icon={faTrash} style={{color: "ff0000"}} />

function ListItem({ name }) {
    const dispatch = useDispatch;
    // onclick dispatch delete 
    function deleteItem() {
        dispatch(dellistitem(name));
    } 

    return (
        <>
            <div id='list-item-container'>
                <div id='list-item-check-name-container'>
                    <input id='list-item-checkbox' type='checkbox'></input>
                    <p id='list-item-name'>{name}</p>
                </div>
                <button id='list-item-delete-btn'
                    onClick={deleteItem}
                >{itemTrash}</button>
            </div>
        </>
    )
}
export default ListItem;
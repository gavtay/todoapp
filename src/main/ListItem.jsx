import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { dellistitem } from '../actions';
import './ListItem.css';

const itemTrash = <FontAwesomeIcon id="plus-icon" icon={faTrash} style={{color: "ff0000"}} />

function ListItem({ name }) {
    const dispatch = useDispatch();

    const currSelectedProjectName = useSelector(state => state.currSelectedProject);

    // onclick dispatch delete 
    function deleteItem() {
        console.log('Delete task: ' + name);

        dispatch(dellistitem(name, currSelectedProjectName));
    } 

    return (
        <>
            <div id='list-item-container'>
                <div id='list-item-check-name-container'>
                    <input id='list-item-checkbox' type='checkbox'></input>
                    <p id='list-item-name'>{name}</p>
                </div>
                <button id='list-item-delete-btn'
                    onClick={()=>deleteItem()}
                >{itemTrash}</button>
            </div>
        </>
    )
}
export default ListItem;
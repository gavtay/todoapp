import { useSelector, useDispatch } from 'react-redux';
import { addnewitemtext, addlistitem, clearnewitemtext } from '../actions';
import './newListItem.css';

function NewListItem() {
    const newItemText = useSelector(state => state.newItemText);
    const currSelectedProjectName = useSelector(state => state.currSelectedProject);
    const projectArr = useSelector(state => state.projectArray);
    const dispatch = useDispatch();

    function changeNewItemInput(event) {
        dispatch(addnewitemtext(event.target.value));
    }

    function addNewListItem() {
        let projectArrayListLength = projectArr[0].list.length;

        const projectArrayIndex = projectArr.map((project, index) => {
            if (project.projectName === currSelectedProjectName) {
                return index
            }
        })

        if (newItemText) {
            dispatch(addlistitem(newItemText, currSelectedProjectName, projectArrayIndex, projectArrayListLength));
            dispatch(clearnewitemtext());
        }
    }

    return (
        <>
            <div id='new-item-container'>
                <h4>+ Add New Item</h4>
                <input
                    id='new-item-input'
                    type='text'
                    placeholder='Title'
                    value={newItemText}
                    autoComplete='off'
                    onChange={(event)=> changeNewItemInput(event)}>
                </input>
            </div>
            <div id='new-item-btns'>
                <button id='new-item-add-btn' className='btn' onClick={()=>addNewListItem()}>Add Task</button>
            </div>
        </>
    )
}
export default NewListItem;
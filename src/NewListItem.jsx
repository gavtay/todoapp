import './NewListItem.css'

function NewListItem() {
    return (
        <>
            <div id='new-item-container'>
                <h4>+ Add New Item</h4>
                <input id='new-item-input' type='text' placeholder='Title'></input>
            </div>
            <div id='new-item-btns'>
                <button id='new-item-cancel-btn' className='btn'>Cancel</button>
                <button id='new-item-add-btn' className='btn'>Add Task</button>
            </div>
        </>
    )
}
export default NewListItem;
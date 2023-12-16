import './ListItem.css';

function ListItem() {
    return (
        <>
            <div id='list-item-container'>
                <div id='list-item-check-name-container'>
                    <input id='list-item-checkbox' type='checkbox'></input>
                    <p id='list-item-name'>Chicken</p>
                </div>
                <button id='list-item-delete-btn'>Delete</button>
            </div>
        </>
    )
}
export default ListItem;
const addNewItemText = (state = '', action) => {
    switch(action.type) {
        case 'ADDNEWITEMTEXT':
            return action.itemName
        default:
            return state
    }
}
export default addNewItemText;
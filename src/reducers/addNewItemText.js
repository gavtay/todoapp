const addNewItemText = (state = '', action) => {
    switch(action.type) {
        case 'ADDNEWITEMTEXT':
            return action.text
        default:
            return state
    }
}
export default addNewItemText;
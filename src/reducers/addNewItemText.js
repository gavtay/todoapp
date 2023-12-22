const addNewItemText = (state = '', action) => {
    switch(action.type) {
        case 'ADDNEWITEMTEXT':
            return action.event;
        case 'CLEARNEWITEMTEXT':
            return ''
        default:
            return state;
    }
}
export default addNewItemText;
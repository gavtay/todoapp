const delListItem = (state = false, action) => {
    switch(action.type) {
        case 'DELLISTITEM':
            return !state;
        default:
            return state;
    }
}
export default delListItem;
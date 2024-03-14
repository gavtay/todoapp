const delListItem = (state = [], action) => {
    switch(action.type) {
        case 'DELLISTITEM':
            state = state.filter(item => {
                if (item.text !== action.text) {
                    return item.text
                }
            })
            return state.map(item => {
                if (item.projectName === action.projectName) {
                    return {item}
                }
            });
        default:
            return state;
    }
}
export default delListItem;
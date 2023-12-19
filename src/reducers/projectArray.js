const projectArray = (state = [], action) => {
    switch(action.type) {
        case 'ADDPROJECT':
            return [...state, action.text]
        default:
            return state
    }
}
export default projectArray;
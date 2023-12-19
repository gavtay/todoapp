const showAddProject = (state = false, action) => {
    switch(action.type) {
        case 'SHOWADDPROJECT':
            return !state;
        default:
            return state;
    }
}
export default showAddProject;
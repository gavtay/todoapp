const filterProject = (state = '', action) => {
    switch(action.type) {
        case 'CHANGEFILTER':
            return action.event
        default:
            return state
    }
}
export default filterProject;
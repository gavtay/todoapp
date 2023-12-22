const currSelectedProject = (state = 'No Project Selected', action) => {
    switch(action.type) {
        case 'NEWSELECTEDPROJECT':
            return action.projectName;
        default:
            return state;
    }
}
export default currSelectedProject;
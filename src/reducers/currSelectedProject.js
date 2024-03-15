const currSelectedProject = (state = 'No Project Selected', action) => {
    switch(action.type) {
        case 'NEWSELECTEDPROJECT':
            return action.projectName;
        case 'NOSELECTEDPROJECT':
            return 'No Project Selected';
        default:
            return state;
    }
}
export default currSelectedProject;
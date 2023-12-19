const updateAddProjectInput = (state = '', action) => {
    switch(action.type) {
        case 'UPDATEADDPROJECTINPUT':
            return action.text
        case 'CLEARADDPROJECTINPUT':
            return ''
        default:
            return state
    }
}
export default updateAddProjectInput;
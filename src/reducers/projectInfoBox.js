const projectInfoBox = (state = false, action) => {
    switch(action.type) {
        case 'PROJECTINFOBOX':
            return !state;
        default:
            return state;
    }
}
export default projectInfoBox;
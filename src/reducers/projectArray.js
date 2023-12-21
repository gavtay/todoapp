const projectArray = (state = [], action) => {
    switch(action.type) {
        case 'ADDPROJECT':
            return [...state, 
                    { projectName: action.text }
            ]
        // case 'ADDLISTITEM':
        //     return 
        default:
            return state
    }
}
export default projectArray;
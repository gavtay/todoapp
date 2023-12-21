const projectArray = (state = [], action) => {
    switch(action.type) {
        case 'ADDPROJECT':
            return [
                ...state, 
                { 
                    projectName: action.text,
                    list: []
                }
            ]
        // case 'ADDLISTITEM':
        //     return { 
        //         ...state, 
                
        //      }
        default:
            return state
    }
}
export default projectArray;
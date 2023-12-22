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

        case 'ADDLISTITEM':
            return state.map(item => {
                if (item.projectName === action.projectName) {
                    return {...item, list: [
                        ...item.list,
                        action.itemName
                        ]
                    }
                };
                return item;
            });
        default:
            return state
    }
}
export default projectArray;
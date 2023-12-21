export const showaddproject = () => {
    return {
        type: 'SHOWADDPROJECT'
    }
}

export const updateaddprojectinput = (text) => {
    return {
        type: 'UPDATEADDPROJECTINPUT',
        text: text
    }
}
export const clearaddprojectinput = () => {
    return {
        type: 'CLEARADDPROJECTINPUT'
    }
}

export const addproject = (text) => {
    return {
        type: 'ADDPROJECT',
        text: text
    }
}
export const addlistitem = (text, index) => {
    return {
        type: 'ADDLISTITEM',
        text: text,
        ind: index
    }
}

export const addnewitemtext = (text) => {
    return {
        type: 'ADDNEWITEMTEXT',
        text: text
    }
}
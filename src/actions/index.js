export const showaddproject = () => {
    return {
        type: 'SHOWADDPROJECT'
    }
}

export const filterproject = (text) => {
    return {
        type: 'CHANGEFILTER',
        event: text
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

export const newselectedproject = (name) => {
    return {
        type: 'NEWSELECTEDPROJECT',
        projectName: name
    }
}

export const projectinfobox = () => {
    return {
        type: 'PROJECTINFOBOX'
    }
}

export const addnewitemtext = (text) => {
    return {
        type: 'ADDNEWITEMTEXT',
        event: text
    }
}
export const clearnewitemtext = () => {
    return {
        type: 'CLEARNEWITEMTEXT'
    }
}
export const addlistitem = (text, name) => {
    return {
        type: 'ADDLISTITEM',
        itemName: text,
        projectName: name,
    }
}
export const dellistitem = (text) => {
    return {
        type: 'DELLISTITEM',
        event: text
    }
}
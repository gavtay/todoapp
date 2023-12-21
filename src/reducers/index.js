import { combineReducers } from 'redux';
import showAddProject from './showAddProject';
import updateAddProjectInput from './updateAddProjectInput';
import projectArray from './projectArray';
import addNewItemText from './addNewItemText';

const allReducers = combineReducers({
    showAddProject,
    updateAddProjectInput,
    projectArray,
    newItemText: addNewItemText
});
export default allReducers;
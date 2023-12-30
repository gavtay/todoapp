import { combineReducers } from 'redux';
import showAddProject from './showAddProject';
import updateAddProjectInput from './updateAddProjectInput';
import projectArray from './projectArray';
import addNewItemText from './addNewItemText';
import currSelectedProject from './currSelectedProject';
import filterProject from './filterProjects';

const allReducers = combineReducers({
    showAddProject,
    updateAddProjectInput,
    projectArray,
    newItemText: addNewItemText,
    currSelectedProject,
    filterProject
});
export default allReducers;
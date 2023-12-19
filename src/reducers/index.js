import { combineReducers } from 'redux';
import showAddProject from './showAddProject';
import updateAddProjectInput from './updateAddProjectInput';
import projectArray from './projectArray';

const allReducers = combineReducers({
    showAddProject,
    updateAddProjectInput,
    projectArray
});
export default allReducers;
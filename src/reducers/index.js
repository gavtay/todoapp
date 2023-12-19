import { combineReducers } from 'redux';
import showAddProject from './showAddProject';
import updateAddProjectInput from './updateAddProjectInput';

const allReducers = combineReducers({
    showAddProject,
    updateAddProjectInput
});
export default allReducers;
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

/*------------------------------------------
import reducers below with a logical alias name 
------------------------------------------*/
import caseTypes from './caseTypeReducer';


const rootReducer = combineReducers({
    /*------------------------------------------
    the names below will be exposed in state as state.<name>. 
    This is important for the views: mapStateToProps
    Inside form (state.form) will be the forms known you declare 
    in the views (like: state.form.contact)
    ------------------------------------------*/
    caseTypes,
    form: formReducer  
});

/**
 * export your rootReducer 
*/
export default rootReducer;
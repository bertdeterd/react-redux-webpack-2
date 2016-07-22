import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

/*------------------------------------------
import reducers below with a logical alias name
------------------------------------------*/
import caseTypes from './courseReducer';


const rootReducer = combineReducers({
    /*------------------------------------------
    the names below will be exposed in state as state.<name>. 
    This is important for the views: mapStateToProps
    ------------------------------------------*/
    caseTypes,
    form: formReducer  
});

export default rootReducer;
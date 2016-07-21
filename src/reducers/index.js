import {combineReducers} from 'redux';

/*------------------------------------------
import reducers below with a logical alias name
------------------------------------------*/
import caseTypes from './courseReducer';


const rootReducer = combineReducers({
    /*------------------------------------------
    the names below will be exposed in state as state.<name>. 
    This is important for the views: mapStateToProps
    ------------------------------------------*/
    caseTypes  
});

export default rootReducer;
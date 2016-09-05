import caseTypeApi from '../api/caseTypeApi';

export const CASETYPES_REFRESH = 'CASETYPES_REFRESH';

/**
 * -------------------------------------
 * ACTION CREATORS 
 * -------------------------------------
 * will be executed within redux
 * Actions must be handled by a reducer
*/
export function createCourse(course) {
    return { type: 'CREATE_COURSE', course };
}

export function getAllCaseTypesSuccess(caseTypes) {
    return { type: 'CASETYPES_SUCCESS', caseTypes };
}

export function getCaseTypeByIndex(selectedRows) {
   return { type: 'SELECTED_CASETYPE', selectedRows };
}

export function showActivities(toggle) {
   return { type: 'SHOW_ACTIVITIES', toggle };
}

/**
 * -------------------------------------
 * THUNKS
 * -------------------------------------
 * Redux Thunk middleware allows you to write action creators 
 * that return a function instead of an action. 
 * The thunk can be used to:
 * 1. delay the dispatch of an action, 
 * 2. or to dispatch only if a certain condition is met
 * example: store.dispatch(getAllCaseTypes());
*/



export function getAllCaseTypes() {
    return function (dispatch) {
         dispatch(showActivities(false));
        return caseTypeApi.getAllCaseTypes()
            .then(
            caseTypes => {
                //dispatch an action through an action creator 
                dispatch(getAllCaseTypesSuccess(caseTypes));
            })
            .catch(
            error => {
                throw (error);
                //TODO: we should do getAllCaseTypesError
            });
    };
}

export function createCaseType(ct) {
    return function (dispatch) {
        debugger;
        console.log(ct);
    };
}


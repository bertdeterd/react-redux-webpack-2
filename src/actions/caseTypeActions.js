import caseTypeApi from '../api/caseTypeApi';

export const CASETYPES_REFRESH = 'CASETYPES_REFRESH';


//ACTION CREATORS 
//will be executed within redux
//must be handled by a reducer
export function createCourse(course){
    return { type: 'CREATE_COURSE', course};
}

export function getAllCaseTypesSuccess(caseTypes){
 return { type: 'CASETYPES_SUCCESS', caseTypes};
}

//THUNKS
export function getAllCaseTypes(){
    return function(dispatch){
        return caseTypeApi.getAllCaseTypes()
        .then(
            caseTypes => { 
                //fire off success via action creator
                dispatch(getAllCaseTypesSuccess(caseTypes)); })
        .catch(
            error => {
                throw(error);});//we should do getAllCaseTypesError
    };
}
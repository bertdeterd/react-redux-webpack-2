export default function caseTypeReducer(state = {}, action) {
    switch (action.type) {

        case 'CASETYPES_SUCCESS':
            //replace what was in our state
            //by making a copy {} and adding some changes
            //return action.caseTypes;
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.caseTypes
            });

        case 'SELECTED_CASETYPE':
             return Object.assign({}, state, {
                selected: state.items[action.selectedRows[0]]
            });

        case 'CREATE_COURSE':
            return [...state,
                Object.assign({}, action.course)
            ];

        default:
            return state;

    }
}
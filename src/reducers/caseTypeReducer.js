export default function caseTypeReducer(state = { showActivities: false }, action) {

    console.log('EXECUTING ' + action.type);
    switch (action.type) {

        case 'CASETYPES_SUCCESS':
            //replace what was in our state
            //by making a copy {} from the current state 
            //and adding some changes
            //i.c. return action.caseTypes;
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

        case 'SHOW_ACTIVITIES':
            if (action.toggle === false || action.toggle === true) {
                return Object.assign({}, state, {
                    showActivities: action.toggle
                });
            } else {
                return Object.assign({}, state, {
                    showActivities: !state.showActivities
                });
            }

        default:
            return state;
    }
}
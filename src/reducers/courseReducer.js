export default function courseReducer(state = {}, action) {
    switch (action.type) {

        case 'CASETYPES_SUCCESS':
            //replace what was in our state
           // return action.caseTypes;

          return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.caseTypes
       // lastUpdated: action.receivedAt
      });

     // return xx;

        case 'CREATE_COURSE':
            return [...state,
                Object.assign({}, action.course)
            ];

        default:
            return state;

    }
}


const initialState = {
    loading: false,
    data: [],
    error: null
  };

export function reducer(state=initialState,action){

    switch (action.type) {
        case "DATA_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case "DATA_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
} 
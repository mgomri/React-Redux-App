import { IN_PROGRESS, SUCCESS, FAILURE } from '../actions/actions';

const initialState = {
    data : [],
    fetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case IN_PROGRESS:
            return {
                ...state, 
                fetching: true,
                error: ''
            };

        case SUCCESS:
            return {
                ...state,
                data: action.payload,
                fetching: false,
                error: ''
                
            };

        case FAILURE:
            return {
                ...state,
                data:[],
                fetching:false, 
                error: action.payload
            }
      default:
          return state;
    }
}
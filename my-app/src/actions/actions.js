import axios from 'axios';

export const IN_PROGRESS = 'IN_PROGRESS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getCovid19 = () => dispatch => {
    dispatch({ type: IN_PROGRESS})
    axios
    .get('https://covid19.mathdro.id/api/confirmed')
    .then(response => 
        dispatch({type: SUCCESS, payload: response.data})
        
        
        )
    .catch(error => dispatch({type: FAILURE, payload: error}))
   
        
}


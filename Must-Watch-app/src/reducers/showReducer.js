import {v4 as uuidv4} from 'uuid'; 

export const showReducer= (state,action) => {
    switch(action.type) {
        case 'ADD_SHOWS' :
            return [...state, {
                title: action.shows.title,
                cast: action.shows.cast,
                id: uuidv4()
            }];
        case 'REMOVE_SHOW' : 
            return state.filter( show => show.id !== action.id);
        default:
            return state;
    }
}
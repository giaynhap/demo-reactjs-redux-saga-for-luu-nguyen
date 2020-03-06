import {INCREMENT,INCREMENT_ASYNC} from '../actions/actionTypes'


const defaultState = {
    hello:"luu an cut",
}
export default (state = defaultState ,action)=>{

    
    switch (action.type){
        case INCREMENT: 
            return {...state, hello:"Thuc an com"}
        default:
            return state;
    }
}
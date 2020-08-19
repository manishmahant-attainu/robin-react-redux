import { POST_LIST } from "../actions";

const postInitialState = {};

const postModel = {
    id: Date(),
    title:'',
    body:'',
    author:''
};

const postReducer = function(state,action) {
    state = state || postInitialState;

    if(action.type === POST_LIST) {
        return { ...action.payload };
    }

    return state;
}

export default postReducer;
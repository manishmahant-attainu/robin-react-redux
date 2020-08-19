const STATUS = {
    PENDING: 0,
    DONE: 1,
    DELETED: 2,
};

export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const todoModel = {
    id: Date(),
    title: '',
    state: STATUS.PENDING
};


const initialState = [];

const reducer = function(state,action) {
    state = state || initialState;

    switch (action.type) {
        case CREATE_TODO: {
            const todo = {...todoModel, title: action.payload, id: Date()}
            return [ ...state, todo ];
            // return state.concat(todo);
        }
        case DELETE_TODO:
            const todos = state.filter( todo => todo.id !== action.payload)
            return todos;
        case UPDATE_TODO:
            return state;
    
        default:
            return state;
    }
}

export default reducer;
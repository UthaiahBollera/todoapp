let initialState = {
    todo: []
}

let reducer = (state, action) => {
    switch (action.type) {
        case "INIT":
            return initialState;
        case "ADD_TODO":
            state.todo.push(action.data);
            return state;
        case "REMOVE_TODO":
            return {
                todo: state.todo.filter(d => d.id != action.data.id)
            }
        case "TOGGLE_COMPLETED":
            return {
                todo: state.todo.map(d => {
                    if (d.id == action.data.id) {
                        d.completed = !d.completed;
                    }
                    return d;
                })
            }
        default:
            return state;
    }
};

export default reducer;
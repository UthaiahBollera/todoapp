//REDUX
function createStore(intialState = {}, reducer = () => {}) {
    let allTodos = JSON.parse(localStorage.getItem('todo'));
    let state = intialState ;
    try{
        state = Object.keys(allTodos).length ? allTodos : intialState;
    }catch(e){}    
    let listeners = [];

    const dispatch = action => {
      state = reducer(state, action);
      listeners.forEach(listener => {
        listener(state);
      });
    localStorage.setItem('todo',JSON.stringify(state));
    };
    
    const getState = () => {
      return state;
    };

    const subscribe = listener => {
      listener && listener.constructor === Function && listeners.push(listener);
    };
    
    return {
      dispatch,
      getState,
      subscribe
    };
  };

  export default createStore;

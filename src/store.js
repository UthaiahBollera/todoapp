//REDUX
function createStore(intialState = {}, reducer = () => {}) {
    let state = intialState;
    let listeners = [];

    const dispatch = action => {
      state = reducer(state, action);
      listeners.forEach(listener => {
        listener(state);
      });
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
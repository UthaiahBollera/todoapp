import createStore from './store.js';
import todoReducer from './reducers/todo-reducer.js';
import todoHeader from './components/header.js';
import todoBody from './components/todo-body.js';
import Footer from './components/footer.js';

let store = createStore({}, todoReducer);

let app = document.getElementById('todo-app');

export default class App {
    constructor() {
        store.subscribe((state) => {
            this.renderApp(state)
        });
        store.dispatch({ type: 'INIT' });
        this.attachEvents();
    }

    attachEvents() {
        document.addEventListener('click', (event) => {
            let { id, className = "" } = event.target;
            if (id == "todo-button") {
                let { value } = document.querySelector('#todo-text');
                value && store.dispatch({
                    type: 'ADD_TODO',
                    data: {
                        id: Math.random(100) * 10000,
                        text: value,
                        completed: false
                    }
                });
            }
            if (className.indexOf('completed') >= 0) {
                store.dispatch({
                    type: 'TOGGLE_COMPLETED',
                    data: {
                        id
                    }
                });
            }
            if (className.indexOf('remove') >= 0) {
                store.dispatch({
                    type: 'REMOVE_TODO',
                    data: {
                        id
                    }
                });
            }
        });
    }

    renderApp(props) {
        app.innerHTML = `
        ${todoHeader()}
        ${todoBody(props)}
        ${Footer(props)}
        `;
    }
};

new App();
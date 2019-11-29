import store from '../store.js';

const Header = (props)=> {
    return `<div id='header'>
        <input type='text' id='todo-text' />
        <button type='button' id='todo-button'> Add Todo</button>
    </div>`
};
export default Header;
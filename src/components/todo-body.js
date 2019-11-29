
const Body = (props) => {
    let { todo } = props || {};
    
    const getList = () => {
        let list = '';
        todo.forEach((todo) => {
            list += `<li class='todo-list' id="${todo.id}"> 
                <input type='checkbox' id="${todo.id}" ${todo.completed ? "checked" : ""} class='completed' />
                <span class='todo-text ${todo.completed ? "todo-completed" : ""}'>${todo.text}</span>
                <button id="${todo.id}" class='remove'>Remove</button>
            </li>`;            
        });
        return list;
    };//getList

    if(!todo.length){
        return `<h4>No items...</h4>`;
    }
    return `<div id='todo-body'>
            <ol>
                ${getList()}
            </ol>
        </div>
    `;
};
export default Body;
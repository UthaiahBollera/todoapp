const Footer = (props)=>{
    return `<div>
    <hr/>
        <i>Completd: ${props.todo.filter(d=>d.completed).length};  Total:${props.todo.length}</i>         
    </div>`
};
export default Footer;
import React from 'react';


class Todo extends React.Component {

    render() {
        return (
            <li>
                <span>{this.props.id}</span>
                <span>：{this.props.title}　　</span>
                <span>：{this.props.content}　　</span>
                <p>{this.props.desc}</p>
            </li>
        );
    }
}

export default Todo
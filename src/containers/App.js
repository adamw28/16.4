import React from 'react';
import style from './App.css';
import uuid from 'uuid';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            currentValue:''
        };
    }
    Addtodo(currentValue){
        console.log('currentValue ',this.state.currentValue);
        const todo = {
            text: this.state.currentValue,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        const Title = props => <h1>{props.title}</h1>
        console.log('todo ',todo);
    }
    handlePress(event){
        console.log('event.target.value ',event.target.value);
        this.setState({currentValue:event.target.value});
        console.log('currentValue ',this.state.currentValue);
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
        
            <form className={style.TodoApp} onSubmit={this.Addtodo.bind(this)}>
                <input type="text" id="title" onChange={this.handlePress.bind(this)}/>
                <button>Add title</button>
                <App.Addtodo title='this.state.date'/>
            </form>
        
        );
    }
}

export default App;
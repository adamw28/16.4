import React from 'react';
import uuid from 'uuid';
import style from './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){console.log(val);
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        console.log('todo ',todo);console.log('this.state.data ',this.state.data);
        const data = [...this.state.data, todo];
        this.setState({data});
        const Title = props => <h1>{props.title}</h1>
    }
    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
    }
render() {
    return (
        <div>
            <form>
              <input
                type="text"
                id="title"
                ref="title"
                onChange={this.value}/>
              <label onClick={this.addTodo}>Add title</label>
              <label onClick={this.removeTodo}>Remove title</label>
            </form>
            <div>
                {this.Title}
            </div>
        </div>
    );
    }
}

export default App;
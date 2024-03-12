import React, {Component} from 'react'

class TodoComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos: 
            [
                {id: 1, description : 'Learn to dance', done: false, targetDate: new Date()},
                {id: 2, description : 'become Expert at React', done: false, targetDate: new Date()},
                {id: 3, description : 'Travel across India', done: false, targetDate: new Date()}
            ]
        }
    }
    render(){
        return (
            <div>
                <h1>Todo's list</h1>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map((todo)=>(
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TodoComponent
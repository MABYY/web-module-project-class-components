import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

const hardCodedTasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {

  constructor() {
    super();
      this.state = {
        tasks : hardCodedTasks,
      };
    }
  

  handleDeleteEvent = () => alert("Delete Event just happened!");


  handleAdd =(note) => {
    const newTask = {
            task: note,
            id: Date.now(),
            completed: false
          }
    const newTasks = [...hardCodedTasks, newTask]
    this.setState ({
      tasks : newTasks,});
  }

  clearCompleted = () => { //filter unfinished tasks
    this.setState({
      tasks: this.state.tasks.filter((item) => { 
        return !item.completed                       
      })
    })
  }

  toggleTask = (itemId) => {                
    this.setState({
      tasks: this.state.tasks.map((item) => {        
        if(item.id === itemId) {                     
          return {                                   
            ...item,                                 
            completed: !item.completed               
          }                                         
        }
        return item;                                 
      })
    })
  }
  
  render() {
    return (
      <div>
        <h2>Todo List: MPV</h2>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks = {this.state.tasks} 
                  compledtedHandle ={this.clearCompleted}
                  toggleTask={this.toggleTask}/>
        <TodoForm eventInput = {this.handleAdd} />
        
      </div>
    );
  }
}


export default App;

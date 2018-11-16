import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

import { todos } from './todos.json';

class App extends Component {
  //metodo que se ejecuta antes del componente
  constructor() {
    //constructo es para heredar todas las funciones del componente
    super();
    //estado de este componente se administra en memoria
    this.state = {
      title: 'Aplicacion de Tarea',
      numeroTareas: 10,
      todos
    }
  }
  render() {
    //recorrer una a una cada tarea con map();
    const todos = this.state.todos.map((todo, i) => {
      //cada vez que recorra una tarea le voy a crear una interfaz
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
              </div>
              <div className="card-body">
                <p>
                  {todo.description}
                </p>
                <p>
                  <mark>{todo.responsible}</mark>
                </p>
              </div>
            </div>
          </div>
      )
    })

    return (
      <div className="App">
          <Navigation title="Show me a title" />
          <Navigation title="The second text" /> 
          <Navigation title="Other text" />
        <div className="container">
          <h1>
            { this.state.title } - { this.state.numeroTareas }
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
          { "Hello".toUpperCase() }
          <br/>
          <br/>
          <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
              Task
              <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.lenght}
              </span>
            </a>
          </nav>
          <div className="row">
            { todos }
          </div>
        </div>

          
      </div>
    );
  }
}

export default App;

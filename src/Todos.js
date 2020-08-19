import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { CREATE_TODO } from './store/reducer';
import TodoList from './TodoList';
class App extends React.Component {
  state = {
    title: ''
  }

  inputHandler = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state.title);
    this.setState({title:''});
  }

  // state is lost on reloading || unmounting
  // redux data is lost only when you reload
  render() {
    const {  title } = this.state;
    return (
      <div className="App">
        <div>
          <h1>Todo App</h1>
        </div>
        <div>
          <form onSubmit={this.submitForm}>
            <input type="text" name="title" value={title} onChange={this.inputHandler} />
            <button type="submit" disabled={!title}>Add</button>
          </form>
        </div>
        <TodoList />
      </div>
    );
  }
}

//param1
// const mapStateToProps = (state) => {
//   return {
//     todos : state,
//   }
// }

//param2
const mapDispatchToProps = (dispatch) => {
  return {
    createTodo : (title) => dispatch({type:CREATE_TODO, payload:title}),
  }
}

export default connect(null,mapDispatchToProps)(App);

// function abc (param1, param2) {

//   return function (Component) {
//     <Component {...param1} {...param2} />
//   }
// }
// abc(param1,param2)(Component)
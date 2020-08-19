import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import TodoList from '../components/TodoList';
import { CREATE_TODO } from '../actions';

class Todo extends React.Component {
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

const createTodoFunction = (title) => {
  return {type:CREATE_TODO, payload:title}
}

//param2
const mapDispatchToProps = (dispatch) => {
  return {
    createTodo : (title) => dispatch(createTodoFunction(title)),
  }
}

export default connect(null,mapDispatchToProps)(Todo);

// {
//   key:value,
//   key2:value2,
//   createTodo: function(title) {
//     return dispatch({
//       type:CREATE_TODO, payload:title
//     })
//   }
// }

// function abc(para1, para2) {

// }

// abc('value')

// function connect (state, dispatch) {

//   return function (Component) {
//     <Component {...param1} {...param2} />
//   }
// }
// abc(param1,param2)(Component)
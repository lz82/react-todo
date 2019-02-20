import React, { Component } from 'react'
import store from '../store'
import { CreateInitTodoItemList, CreateUpdateTodoItemAction, CreateAddTodoItemList, CreateDeleteTodoItemList } from '../store/action-creator'

import TodoListUI from './todo-list-ui'
import Axios from 'axios';

class TodoList extends Component {
  constructor (props) {
    super(props)

    this.state = store.getState()
    this.handleAdd = this.handleAdd.bind(this)
    this.handleTodoChange = this.handleTodoChange.bind(this)
    this.handleDel = this.handleDel.bind(this)

    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.todoInput = React.createRef()
    store.subscribe(this.handleStoreChange)
  }

  async componentDidMount () {
    const { status, data } = await Axios.get('https://api.github.com/users/lz82')
    if (status === 200) {      
      const list = [
        data.name
      ]
      const action = CreateInitTodoItemList(list)
      store.dispatch(action)
    }
    
  }

  render () {
    const { todoItem, list } = this.state
    return (
      <TodoListUI
        todoItem={todoItem }
        list={ list }
        handleTodoChange={ this.handleTodoChange }
        handleAdd={ this.handleAdd }
        handleDel={ this.handleDel }
        ref={this.todoInput}
      />
    )
  }

  handleTodoChange (e) {
    const todoItem = e.target.value
    const action = CreateUpdateTodoItemAction(todoItem)
    store.dispatch(action)
  }

  handleStoreChange () {
    this.setState(() => {
      return store.getState()
    })
  }

  handleAdd (val) {
    if (val) {
      const action = CreateAddTodoItemList()
      store.dispatch(action)
    }
  }

  handleDel (index, e) {
    const action = CreateDeleteTodoItemList(index)
    store.dispatch(action)
  }
}

export default TodoList
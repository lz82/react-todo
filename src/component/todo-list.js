import React, { Component } from 'react'
import store from '../store'
import { CreateGetInitTodoList, CreateUpdateTodoItemAction, CreateAddTodoItemList, CreateDeleteTodoItemList } from '../store/action-creator'

import TodoListUI from './todo-list-ui'

const dispatch = store.dispatch

class TodoList extends Component {
  constructor (props) {
    super(props)

    this.state = store.getState()
    this.handleAdd = this.handleAdd.bind(this)
    this.handleTodoChange = this.handleTodoChange.bind(this)
    this.handleDel = this.handleDel.bind(this)

    this.handleStoreChange = this.handleStoreChange.bind(this)

    store.subscribe(this.handleStoreChange)
  }

  async componentDidMount () {
    const action = CreateGetInitTodoList()
    dispatch(action)
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
      />
    )
  }

  handleTodoChange (e) {
    const todoItem = e.target.value
    const action = CreateUpdateTodoItemAction(todoItem)
    store.dispatch(action)
    if (!todoItem) {
      this.todoInput.focus()
    }
  }

  handleStoreChange () {
    this.setState(() => {
      return store.getState()
    })
  }

  handleAdd (val) {
    if (val) {
      const action = CreateAddTodoItemList()
      dispatch(action)
    }
  }

  handleDel (index, e) {
    const action = CreateDeleteTodoItemList(index)
    dispatch(action)
  }
}

export default TodoList
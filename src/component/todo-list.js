import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Input, List, Icon } from 'antd'

import { CreateTodoitemInputChangeAction, CreateTodoItemListAddAction, CreateTodoItemListDelAction } from '../store/action-creator'


class TodoList extends Component {
  render () {
    const { todoItem, todoList, todoItemInputChange, todoItemListAdd, todoItemDel } = this.props
    return (
      <Fragment>
        <Input.Search 
          placeholder='please input todo item'
          enterButton='Add'
          allowClear
          value={ todoItem }
          onChange={ todoItemInputChange }
          onSearch={ todoItemListAdd }
        />
        <List 
          dataSource={ todoList }
          renderItem={(item, index) => (
            <List.Item
              actions={[<Icon type="delete" style={{cursor: 'pointer'}} onClick={ todoItemDel.bind(this, index) } />]}
            >
             { item }
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  todoItem: state.todoItem,
  todoList: state.todoList
})

const mapDispatchToProps = dispatch => {
  return {
    todoItemInputChange (e) {
      dispatch(CreateTodoitemInputChangeAction(e.target.value))
      if (e.target.value === '') {
        e.target.focus()
      }
    },

    todoItemListAdd () {
      dispatch(CreateTodoItemListAddAction())
    },

    todoItemDel (index) {
      dispatch(CreateTodoItemListDelAction(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
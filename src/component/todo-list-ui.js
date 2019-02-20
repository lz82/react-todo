import React, { Component } from 'react'
import 'antd/lib/input'
import 'antd/lib/list'
import { Input, List } from 'antd'

const Search = Input.Search
const ListItem = List.Item


class TodoListUI extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.handleTodoChange = this.handleTodoChange.bind(this)

    this.todoInput = React.createRef()
  }

  render () {
    const { todoItem, list, handleTodoChange, handleAdd } = this.props
    return (
      <div style={{ width: 500 }}>
        <Search
          value={ todoItem }
          placeholder='please input a todo item'
          enterButton='Add'
          size='large'
          allowClear
          ref={ this.todoInput }
          onChange={ this.handleTodoChange }
          onSearch={ handleAdd }
        />
        <List
          dataSource={list}
          renderItem={(item, index) => (
            <ListItem
              actions={[
                <a
                  href='/#'
                  onClick={ this.handleDel.bind(this, index) }
                >
                  x
              </a>
              ]}
            >
              {item}
            </ListItem>
          )}
        />
      </div>
    )
  }

  handleDel (index, e) {
    e.preventDefault()
    this.props.handleDel(index)
  }

  handleTodoChange (e) {
    if (e.target.value === '') {
      e.target.focus()
    }
    this.props.handleTodoChange(e)
  }
}

export default TodoListUI
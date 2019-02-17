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
          ref={ node => this.todoInput = node }
          onChange={ handleTodoChange }
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
}

export default TodoListUI
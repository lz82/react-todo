import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Layout } from 'antd'
import TodoList from './component/todo-list'
import store from './store'

import './App.scss'

const { Header, Content } = Layout

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout className='app-layout-header'>
          <Header className='header'>
            TODO List
          </Header>
        </Layout>
        <Layout className='app-layout-content'>
          <Content style={{padding: '20px 50px'}}>
            <div className="todo-list-wrapper">
              <TodoList />
            </div>
          </Content>
        </Layout>
      </Provider>
    )
  }
}

export default App;

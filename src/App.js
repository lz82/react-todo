import React, { Component, Fragment } from 'react';
import 'antd/lib/layout'
import { Layout } from 'antd'
import TodoList from './component/todo-list'

import './App.scss'

const { Header, Content } = Layout

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout className='app-layout'>
          <Header className='header'>
            TODO List
          </Header>
        </Layout>
        <Layout>
          <Content style={{padding: '20px 50px'}}>
            <TodoList />
          </Content>
        </Layout>
      </Fragment>
    );
  }
}

export default App;

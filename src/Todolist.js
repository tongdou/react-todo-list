import React from 'react';
import Todoitem from './Todoitem';

// JSX语法结构，
class Todolist extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
      ],
      inputValue: ''
    };
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleBtnClick() {
    if (this.state.inputValue === '') {
      return;
    }

    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: ''
    }));
  }

  handleInputChange() {
    const value = this.input.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  // 删除todolist
  handleItemClick(index) {
    this.setState((preState) => {
      const list = [...preState.list];
      list.splice(index, 1);
      return { list };
    });
  }

  // 通过子组件回调删除子组件
  handleItemDelete(index) {
    this.setState(() => {
      const list = [...this.state.list];
      list.splice(index, 1);
      return { list };
    });
  }

  render() {
    return (<div>
      <label htmlFor="todoInput">请输入内容</label>
      <input
        placeholder="请输入内容"
        id="todoInput" value={this.state.inputValue}
        onChange={this.handleInputChange}
        ref={(input) => { this.input = input }} />
      <button onClick={this.handleBtnClick}>add</button>
      <ul>
        {this.gotTodoitem()}
      </ul>
    </div>)
  }


  gotTodoitem() {
    return this.state.list.map((item, index) => {
      return <Todoitem key={index} content={item} index={index} deleteItem={this.handleItemDelete} />
    });
  }

}

export default Todolist;

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
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 删除todolist
  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
  }

  // 通过子组件回调删除子组件
  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (<div>
      <input value={this.state.inputValue} onChange={this.handleInputChange} />
      <button onClick={this.handleBtnClick}>add</button>
      <ul>
        {this.state.list.map((item, index) => {
          return <Todoitem key={index} content={item} index={index} deleteItem={this.handleItemDelete} />
        })}
      </ul>
    </div>)
  }

}

export default Todolist;

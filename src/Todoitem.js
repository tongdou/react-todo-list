import React from 'react';

// 父组件向子组件传参：使用参数
// 子组件获取参数使用props
class Todoitem extends React.Component {


  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  render() {
    return (<div>
      <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>
    </div>)
  }
}

export default Todoitem;

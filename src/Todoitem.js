import React from 'react';
import PropTypes from 'prop-types';

// 父组件向子组件传参：使用参数
// 子组件获取参数使用props
class Todoitem extends React.Component {


  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  render() {
    console.log("item render");
    return (
      <div>
        {this.getContent()}
      </div>
    )
  }

  getContent() {
    return (
      <li onClick={this.handleClick.bind(this)}> {this.props.title} - {this.props.content}</li>
    )

  }
}

Todoitem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

Todoitem.defaultProps = {
  title: 'hello'
}
export default Todoitem;

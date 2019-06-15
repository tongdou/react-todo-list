import React from 'react';
import PropTypes from 'prop-types';

// 父组件向子组件传参：使用参数
// 子组件获取参数使用props
class Todoitem extends React.Component {


  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponentUpdate");
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return true;
    }
  }

  componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }

  componentWillUpdate() {
    console.log("child componentWillUpdate");
  }

  render() {
    console.log("child render");
    return (
      <div>
        {this.getContent()}
      </div>
    )
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
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

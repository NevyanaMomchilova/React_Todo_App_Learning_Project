import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        textDecoration: "line-through",
        background: "#f4f4f4",
        padding: "10px",
        borderBottom: "1px #ccc dotted",
      };
    } else {
      return {
        textDecoration: "none",
      };
    }
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "white",
  border: "none",
  padding: "4px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

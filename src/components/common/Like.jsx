import React, { Component } from "react";

class Like extends Component {
  state = {};

  // handleClick = () => {
  //   const classN = this.state.isOpen ? "fa fa-heart-o" : "fa fa-heart";
  //   this.setState({ cls: classN });
  //   this.setState({ isOpen: !this.state.isOpen });
  // };

  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onClick}
        className={classes}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default Like;

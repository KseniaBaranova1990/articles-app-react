import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { connect } from "react-redux";
import { deleteArticle } from "../redux/actions/actions";
import Button from "react-bootstrap/Button";

class AtricleInfo extends Component {
  static contextType = ThemeContext;
  DeleteMe = (id, e) => {
    this.props.deleteArticle(id);
  };
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div
        className="article"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <p>
          <strong>{this.props.article.title}</strong> by{" "}
          {this.props.article.author}{" "}
        </p>
        <p>{this.props.article.article}</p>
        <Button
          variant="outline-danger"
          onClick={(e) => this.DeleteMe(this.props.article.id, e)}
        >
          Delete
        </Button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteArticle: (id) => {
      dispatch(deleteArticle(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(AtricleInfo);

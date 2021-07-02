import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../redux/actions/actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddArticleForm extends Component {
  state = {
    title: "",
    author: "",
    category: "",
    article: "",
  };

  mySubmitHandler = (event) => {
    event.preventDefault();
    const article = {
      title: this.state.title,
      author: this.state.author,
      category: this.state.category,
      article: this.state.article,
    };
    this.props.addArticle(article);
    alert("New article was added successfully!");
  };

  selectChangeHandler = (event) => {
    this.setState({ category: event.target.value });
  };
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.mySubmitHandler}>
          <h1>Add new article:</h1>

          <Form.Label>Enter author:</Form.Label>
          <Form.Control
            type="text"
            name="author"
            placeholder="Enter author"
            onChange={this.myChangeHandler}
          />
          <Form.Label>Enter title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter title"
            onChange={this.myChangeHandler}
          />

          <Form.Label>Select category:</Form.Label>

          <Form.Control as="select" onChange={this.selectChangeHandler}>
            <option value=""></option>
            <option value="Fashion">Fashion</option>
            <option value="Politics">Politics</option>
          </Form.Control>
          <Form.Label>Enter article:</Form.Label>
          <Form.Control
            type="text"
            name="article"
            placeholder="Enter article"
            onChange={this.myChangeHandler}
          />

          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => {
      dispatch(addArticle(article));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddArticleForm);

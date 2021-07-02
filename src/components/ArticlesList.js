import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import AtricleInfo from "./ArticleInfo";
import { connect } from "react-redux";
import { setCategoryFilter } from "../redux/actions/actions";
import AddArticleForm from "./AddArticle";
import Button from "react-bootstrap/Button";

class ArticlesList extends Component {
  static contextType = ThemeContext;

  changeFilterCategory = (filter, e) => {
    this.props.changeTheFilterCategory(filter);
  };
  render() {
    console.log("articles render", this.props);
    // eslint-disable-next-line
    const { articles, categoryFilter, articlesByCategory } = this.props;
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div
        className="container"
        style={{ color: theme.syntax, background: theme.ui }}
      >
        <div>
          <Button
            variant="outline-success"
            onClick={(e) => this.changeFilterCategory("Health", e)}
          >
            Health
          </Button>
          <Button
            variant="outline-success"
            onClick={(e) => this.changeFilterCategory("Sport", e)}
          >
            Sport
          </Button>
        </div>
        <h1 style={{ color: "#555" }}>New articles about {categoryFilter}</h1>
        {articlesByCategory && articlesByCategory.length ? (
          articlesByCategory.map((article, index) => {
            console.log(article);
            return <AtricleInfo article={article} key={index} />;
          })
        ) : (
          <p>No Articles</p>
        )}
        <AddArticleForm />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("newArticles mapStateToProps", state);
  return {
    articles: state.articles,
    categoryFilter: state.categoryFilter,
    articlesByCategory: state.articles.filter(
      (article) => article.category === state.categoryFilter
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheFilterCategory: (newCategory) => {
      dispatch(setCategoryFilter(newCategory));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);

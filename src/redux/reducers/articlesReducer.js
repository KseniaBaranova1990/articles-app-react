import initState from "./initialState";

const articlesReducer = (arrayOfArticlesState = initState.articles, action) => {
  switch (action.type) {
    case "DELETE_ARTICLE":
      let articles = arrayOfArticlesState.filter((article) => {
        return action.id !== article.id;
      });

      console.log("articlesReducer after delete", {
        articles: articles,
      });

      return articles;

    case "ADD_ARTICLE":
      const newID = arrayOfArticlesState.length + 1 + "";

      return [
        ...arrayOfArticlesState,
        {
          id: newID,
          title: action.newArticle.title,
          author: action.newArticle.author,
          category: action.newArticle.category,
          article: action.newArticle.article,
        },
      ];

    default:
      return arrayOfArticlesState;
  }
};

export default articlesReducer;

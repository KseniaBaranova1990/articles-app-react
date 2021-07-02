export function setCategoryFilter(newCategory) {
  return {
    type: "CHANGE_CATEGORY_FILTER",
    categoryFilter: newCategory,
  };
}
export function addArticle(article) {
  return {
    type: "ADD_ARTICLE",
    newArticle: article,
  };
}
export function deleteArticle(id) {
  return {
    type: "DELETE_ARTICLE",
    id: id,
  };
}

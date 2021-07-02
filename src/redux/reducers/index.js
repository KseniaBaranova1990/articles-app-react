import articlesReducer from "./articlesReducer";
import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  categoryFilter: categoryReducer,
  articles: articlesReducer,
});

export default allReducers;

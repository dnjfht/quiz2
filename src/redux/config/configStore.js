import { combineReducers, createStore } from "redux";
import quiz from "../modules/quiz";
import rank from "../modules/rank";

const rootReducer = combineReducers({
  quiz: quiz,
  rank: rank,
});
const store = createStore(rootReducer);
export default store;

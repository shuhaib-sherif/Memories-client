import { combineReducers } from "redux";
import postsDataReducer from "./postData";
import postsReducer from "./posts";


const rootReducer=combineReducers({
posts: postsReducer,
postData:postsDataReducer
})
export default rootReducer
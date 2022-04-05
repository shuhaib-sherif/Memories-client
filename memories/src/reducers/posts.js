const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
      break;
    case "UPDATE":
      return state.map((post)=> post.id===action.payload._id ? action.payload : state)
      break;
    case "INCREASE_LIKES":
      return state.map((post)=> post.id===action.payload._id ? action.payload : state)
      break;
    case "CREATE":
      return [...state,action.payload];
      break;
     
    default:
      return state;
      break;
  }
};
export default postsReducer;

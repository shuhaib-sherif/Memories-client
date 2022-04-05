const postsDataReducer = (state = [], action) => {
    switch (action.type) {
      case "POST_DATA":
        return action.payload;
        case "CLEAR_DATA":
            return [];
            break;
      default:
        return state;
        break;
    }
  };
  export default postsDataReducer;
  
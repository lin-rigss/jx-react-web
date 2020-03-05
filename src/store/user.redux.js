const initialState = {
  isLogin: false
};

// reducer
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "login":
      return { isLogin: true };

    default:
      return state;
  }
};

// ========== action ==========
// redux-thunk 的 action异步
export function login() {
  return dispatch => {
    // mock一个异步登录
    setTimeout(() => {
      dispatch({ type: "login" });
    }, 1000);
  };
}

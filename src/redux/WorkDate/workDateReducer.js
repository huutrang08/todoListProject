import type from "./workActionType";
const initialState = {
  workDate: "",
  workDateData: null,
  refresh: Math.random(),
};
const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET:
      return { ...state, workDate: action.data };
    case type.SET_DATA:
      return { ...state, workDateData: action.data };
    case type.REFRESH:
      return { ...state, refresh: action.data };
    default:
      return state;
  }
};
export default workReducer;

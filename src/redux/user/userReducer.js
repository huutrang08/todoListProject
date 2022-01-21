const initialState = {
  users:null,
  loading:true
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET':
      return { ...state,users:action.data,loading:false};
      case 'DELE':
      return { ...state,users:null};
    default:
      return state;
  }
};
export default userReducer
 
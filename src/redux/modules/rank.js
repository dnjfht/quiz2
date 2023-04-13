// action value
const ADDUSERNAME = "add_user_name";

// action creator
export const AddUserName = (payload) => {
  return {
    type: ADDUSERNAME,
    payload: payload,
  };
};

// initialState
const initialState = {
  user_name: "",
};

// reducer
const rank = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSERNAME: {
      return { ...state, user_name: action.payload };
    }
    default:
      return state;
  }
};
export default rank;

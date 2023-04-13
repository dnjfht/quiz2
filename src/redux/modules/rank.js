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
const initialState = {};

// reducer
const rank = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSERNAME: {
      return;
    }
    default:
      return state;
  }
};
export default rank;

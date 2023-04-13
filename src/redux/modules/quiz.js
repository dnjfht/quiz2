// action value
const ADDUSERANSWER = "add_user_answer";
const RESETUSERANSWER = "reset_user_answer";

// action creator

export const AddUserAnswer = (payload) => {
  return {
    type: ADDUSERANSWER,
    payload: payload,
  };
};

export const ResetUserAnswer = (payload) => {
  return {
    type: RESETUSERANSWER,
    payload: payload,
  };
};

// initialState
const initialState = {};

// reducer

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSERANSWER: {
      return;
    }
    case RESETUSERANSWER: {
      return;
    }
    default:
      return state;
  }
};

export default quiz;

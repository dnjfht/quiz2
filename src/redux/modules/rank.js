// action value
const ADDUSERNAME = "add_user_name";
const ADDRANK = "add_rank";

// action creator
export const AddUserName = (payload) => {
  return {
    type: ADDUSERNAME,
    payload: payload,
  };
};

export const AddRank = (payload) => {
  return {
    type: ADDRANK,
    payload: payload,
  };
};

// initialState
const initialState = {
  user_name: "",
  rank: [
    { score: 90, name: "유승민", comment: "내 이상형이 딱 보이지 않니?" },
    { score: 40, name: "이하늘", comment: "너무 어려운데..." },
    { score: 60, name: "오하요~!", comment: "잘 생긴 사람이 곧 이상형" },
  ],
};

// reducer
const rank = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSERNAME: {
      return { ...state, user_name: action.payload };
    }
    case ADDRANK: {
      const new_rank_data = [...state.rank, action.payload];
      return { ...state, rank: new_rank_data };
    }
    default:
      return state;
  }
};
export default rank;

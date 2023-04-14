import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

// action value
const ADDUSERNAME = "add_user_name";
const GETRANK = "get_rank";
const ADDRANK = "add_rank";

// action creator
export const GetRank = (payload) => {
  return {
    type: GETRANK,
    payload: payload,
  };
};

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

export const loadQuizFB = () => {
  return async function (dispatch) {
    const quiz_data = await getDocs(collection(db, "quiz"));
    console.log(quiz_data);

    let quiz_list = [];

    quiz_data.forEach((doc) => {
      console.log(doc.data());
      quiz_list.push({ id: doc.id, ...doc.data() });
    });

    console.log(quiz_list);

    dispatch(GetRank(quiz_list));
  };
};

// initialState
const initialState = {
  user_name: "",
  rank: [
    // { score: 90, name: "유승민", comment: "내 이상형이 딱 보이지 않니?" },
    // { score: 40, name: "이하늘", comment: "너무 어려운데..." },
    // { score: 60, name: "오하요~!", comment: "잘 생긴 사람이 곧 이상형" },
  ],
};

// reducer
const rank = (state = initialState, action) => {
  switch (action.type) {
    case GETRANK: {
      return { ...state, rank: action.payload };
    }
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

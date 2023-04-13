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
const initialState = {
  name: "유승민",
  quiz_list: [
    {
      image: "1.png",
      quiz: "최연준은 유승민의 이상형이다?",
      answer: true,
    },
    {
      image: "2.png",
      quiz: "차은우는 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "3.png",
      quiz: "문빈은 유승민의 이상형이다?",
      answer: true,
    },
    {
      image: "4.png",
      quiz: "정윤오는 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "5.png",
      quiz: "도경수는 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "6.png",
      quiz: "황현진은 유승민의 이상형이다?",
      answer: true,
    },
    {
      image: "7.png",
      quiz: "최수빈은 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "8.png",
      quiz: "김태형은 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "9.png",
      quiz: "송강은 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "10.png",
      quiz: "우도환은 유승민의 이상형이다?",
      answer: true,
    },
  ],
  user_answer: [],
};

// reducer

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSERANSWER: {
      const newUserAnswer = [...state.user_answer, action.payload];
      return { ...state, user_answer: newUserAnswer };
    }
    case RESETUSERANSWER: {
      return;
    }
    default:
      return state;
  }
};

export default quiz;

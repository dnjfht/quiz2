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
      image: "static/media/1.30d1f81f227389b2d744.png",
      quiz: "최연준은 유승민의 이상형이다?",
      answer: true,
    },
    {
      image: "http://localhost:3000/static/media/2.ea2d79d1f9b82407f6b5.png",
      quiz: "차은우는 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "http://localhost:3000/static/media/3.0403a5a9c68a11574859.png",
      quiz: "문빈은 유승민의 이상형이다?",
      answer: true,
    },
    {
      image: "http://localhost:3000/static/media/4.6d03807c2e579f327cd2.png",
      quiz: "정윤오는 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "http://localhost:3000/static/media/5.000306b49e7e7dfb132b.png",
      quiz: "도경수는 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "http://localhost:3000/static/media/6.286ad8535967096b137d.png",
      quiz: "황현진은 유승민의 이상형이다?",
      answer: true,
    },
    {
      image: "http://localhost:3000/static/media/7.29d72c41276ec9a09f78.png",
      quiz: "최수빈은 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "http://localhost:3000/static/media/8.fc3513214538aa08d82f.png",
      quiz: "김태형은 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "http://localhost:3000/static/media/9.af03ef371192308c0f69.png",
      quiz: "송강은 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "http://localhost:3000/static/media/10.abb85370fb46971f4c59.png",
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

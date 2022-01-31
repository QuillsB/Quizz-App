import {
  GET_QUIZ_QUESTION_RESPONSE,
} from 'actions/quizActions';

const initialState = {
  questionData: null,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZ_QUESTION_RESPONSE:
      return {
        ...state,
        questionData: action.payload,
      };
    default:
      return state;
  };
}

export default quizReducer;

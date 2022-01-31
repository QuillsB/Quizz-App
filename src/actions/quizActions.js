export const GET_QUIZ_QUESTION = 'GET_QUIZ_QUESTION';
export const GET_QUIZ_QUESTION_RESPONSE = 'GET_QUIZ_QUESTION_RESPONSE';

export const getQuizQuestion = (questionId) => ({
  type: GET_QUIZ_QUESTION,
  payload: questionId,
});

export const getQuizQuestionResponse = (questionData) => ({
  type: GET_QUIZ_QUESTION_RESPONSE,
  payload: questionData,
});

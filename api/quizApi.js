import QUIZ_DATA from '../data/quiz.json';

export function getQuiz(payload) {
  return QUIZ_DATA.find((quizElement) => quizElement.id === payload);
}
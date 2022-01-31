import { connect } from 'react-redux';

import { getQuizQuestion } from 'actions/quizActions';

import QuizScreen from 'components/quizScreen';

const mapStateToProps = (state) => ({
  quizQuestion: state.quiz.quizQuestion,
});

const mapDispatchToProps = {
  getQuizQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);

export const ActionTypes = {
  QUESTION_ASKED: 'container/HomePage/QUESTION_ASKED',
};

const questionAsked = question => ({
  type: ActionTypes.QUESTION_ASKED,
  payload: {
    question,
  },
});

export default {
  questionAsked,
};

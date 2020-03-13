/*
 *
 * Mentors Reducer
 *
 */

import { ActionTypes } from './actions';

/* eslint-disable default-case, no-param-reassign */

export const initialState = {
  activeQuestion: '',
  activeAgentVideos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.QUESTION_ASKED: {
      const { question } = action.payload;
      return {
        ...state,
        activeQuestion: question || '',
      };
    }
    case ActionTypes.FETCH_AGENT_VIDEOS_SUCCESS: {
      const { response } = action.payload;
      return {
        ...state,
        activeAgentVideos: response,
      };
    }
    case ActionTypes.CLEAR_QUESTION: {
      return {
        ...state,
        activeQuestion: '',
      };
    }
    default:
      return state;
  }
}

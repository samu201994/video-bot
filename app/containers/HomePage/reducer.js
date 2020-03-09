/*
 *
 * Mentors Reducer
 *
 */

import { ActionTypes } from './actions';

/* eslint-disable default-case, no-param-reassign */

export const initialState = {
  bots: {
    a1: [
      {
        questionType: 0,
        question: '',
        language: 'es',
        video: 'default',
      },
      {
        questionType: 1,
        question: 'what is your name', // '¿Cuéntanos qué disfrutas más en informática en general?',
        language: 'es',
        video: '1',
      },
      {
        questionType: 1,
        question:
          'Díganos cómo hacen usted y su equipo para reunir los requisitos',
        language: 'es',
        video: '2',
      },
      {
        questionType: -1,
        question: '',
        language: 'es',
        video: 'any',
      },
    ],
  },
  questionAsked: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.QUESTION_ASKED: {
      const { question } = action.payload;
      return {
        ...state,
        questionAsked: question || '',
      };
    }
    default:
      return state;
  }
}

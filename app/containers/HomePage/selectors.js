/*
 *
 * Selectors
 *
 */

import { createSelector } from 'reselect';

/*
 * Domain selectors
 */

const selectAgent = state => state.agents;

// selectors
const selectVideos = createSelector(
  selectAgent,
  agents => {
    const defaultVideo = agents.activeAgentVideos.find(
      video => video.questionType === '0',
    );
    const garbageVideo = agents.activeAgentVideos.find(
      video => video.questionType === '-1',
    );
    const questionList = agents.activeAgentVideos.filter(
      video => video.questionType === '1',
    );
    if (defaultVideo && garbageVideo && questionList) {
      return {
        defaultVideo,
        garbageVideo,
        questionList,
      };
    }
    return null;
  },
);

const selectQuestion = createSelector(
  selectAgent,
  agents => agents.activeQuestion,
);

export default {
  selectVideos,
  selectQuestion,
};

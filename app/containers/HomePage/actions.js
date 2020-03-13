export const ActionTypes = {
  QUESTION_ASKED: 'container/HomePage/QUESTION_ASKED',
  FETCH_AGENT_VIDEOS_SUCCESS: 'container/HomePage/FETCH_AGENT_VIDEOS_SUCCESS',
  FETCH_AGENT_VIDEOS_FAILED: 'container/HomePage/FETCH_AGENT_VIDEOS_FAILED',
  FETCH_AGENT_VIDEOS: 'container/HomePage/FETCH_AGENT_VIDEOS',
  CLEAR_QUESTION: 'container/HomePage/CLEAR_QUESTION',
};

const questionAsked = question => ({
  type: ActionTypes.QUESTION_ASKED,
  payload: {
    question,
  },
});

const fetchAgentVideosSuccess = response => ({
  type: ActionTypes.FETCH_AGENT_VIDEOS_SUCCESS,
  payload: {
    response,
  },
});

const fetchAgentVideosFailed = () => ({
  type: ActionTypes.FETCH_AGENT_VIDEOS_FAILED,
});

const fetchAgentVideos = agentId => ({
  type: ActionTypes.FETCH_AGENT_VIDEOS,
  payload: {
    agentId,
  },
});

const clearQuestion = () => ({
  type: ActionTypes.CLEAR_QUESTION,
});

export default {
  questionAsked,
  fetchAgentVideosSuccess,
  fetchAgentVideosFailed,
  fetchAgentVideos,
  clearQuestion,
};

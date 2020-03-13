/*
 *
 * Home Page
 *
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import ReactPlayer from 'react-player';
import Actions from './actions';
import DefaultVideo from '../../videos/00.mp4';
import Q1Video from '../../videos/01.mp4';
import Q2Video from '../../videos/02.mp4';
import GarbageVideo from '../../videos/_0.mp4';
import SpeechRecognition from './SpeechRecognition';
import Selectors from './selectors';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const VideoContainer = styled.div`
  width: 666.65px;
  height: 375px;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`;

class HomePage extends Component {
  renderQestion = (ques, index) => (
    <Question>{`${index + 1}. ${ques}`}</Question>
  );

  getVideo = () => {
    const { question, videos } = this.props;
    const { questionList } = videos;
    console.log('question: ', question);
    if (question === '') return DefaultVideo;
    for (const ques of questionList) {
      if (
        ques.question_text.toLowerCase() === question.toLowerCase() &&
        ques.video_id === '01'
      )
        return Q1Video;
      if (
        ques.question_text.toLowerCase() === question.toLowerCase() &&
        ques.video_id === '02'
      )
        return Q2Video;
    }

    return GarbageVideo;
  };

  onEnded = () => {
    const { actions } = this.props;
    actions.clearQuestion();
  };

  render() {
    const { videos, question } = this.props;
    if (videos) {
      const { questionList } = videos;
      const v = this.getVideo();
      return (
        <Page>
          <VideoContainer>
            <ReactPlayer
              url={v}
              playing
              loop={!question}
              onEnded={this.onEnded}
            />
          </VideoContainer>
          <SpeechRecognition />
          <QuestionContainer>
            {questionList.map((ques, index) =>
              this.renderQestion(ques.question_text, index),
            )}
          </QuestionContainer>
        </Page>
      );
    }
    return <div />;
  }
}

const mapStateToProps = createStructuredSelector({
  videos: Selectors.selectVideos,
  question: Selectors.selectQuestion,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      clearQuestion: Actions.clearQuestion,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

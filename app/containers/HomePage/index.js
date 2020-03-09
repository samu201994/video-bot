/*
 *
 * Home Page
 *
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DefaultVideo from '../../videos/default.mp4';
import Q1Video from '../../videos/q1.mp4';
import Q2Video from '../../videos/q2.mp4';
import GarbageVideo from '../../videos/garbage.mp4';

import SpeechRecognition from './SpeechRecognition';

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

  getVideoId = questionList => {
    const { questionAsked } = this.props;
    if (questionAsked == '') return DefaultVideo;
    for (let i = 0; i < questionList.length; i++) {
      const ques = questionList[i];
      if (ques.question == questionAsked) return Q1Video;
    }
    return GarbageVideo;
  };

  render() {
    const { a1 } = this.props;
    const questionList = a1.filter(ques => ques.questionType === 1);
    return (
      <Page>
        <VideoContainer>
          <iframe
            src={this.getVideoId(questionList)}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </VideoContainer>
        <SpeechRecognition />
        <QuestionContainer>
          {questionList.map((ques, index) =>
            this.renderQestion(ques.question, index),
          )}
        </QuestionContainer>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  const { agents } = state;
  return { a1: agents.bots.a1, questionAsked: agents.questionAsked };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

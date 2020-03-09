import React from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';
import { FaMicrophone } from 'react-icons/fa';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomePageActions from './actions';

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening: PropTypes.func,
  listening: PropTypes.bool,
  actions: PropTypes.object,
  finalTranscript: PropTypes.string,
};

const options = {
  autoStart: false,
  continuous: false,
};

const MicrophoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

const Microphone = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #d74b3a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
    color: #f3f5ef;
  }
  &:hover {
    cursor: pointer;
    svg {
      color: #e9e6e6;
    }
  }
`;

const SpeechText = styled.div`
  color: #d74b3a;
  padding: 10px;
`;

const Dictaphone = ({
  transcript,
  browserSupportsSpeechRecognition,
  startListening,
  listening,
  finalTranscript,
  actions,
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  if (!listening) {
    actions.questionAsked(finalTranscript);
  }

  return (
    <MicrophoneContainer>
      <Microphone onClick={startListening}>
        <FaMicrophone />
      </Microphone>
      <SpeechText>{transcript}</SpeechText>
    </MicrophoneContainer>
  );
};

Dictaphone.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      questionAsked: HomePageActions.questionAsked,
    },
    dispatch,
  ),
});

export default connect(
  null,
  mapDispatchToProps,
)(SpeechRecognition(options)(Dictaphone));

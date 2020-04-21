import { connect } from 'react-redux';
import Audio from '../../app/components/Audio';
import { thunks } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentTab: state.currentTab,
    currentSubTab: state.currentSubTab,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSubTab: (id) => {
      dispatch(thunks.onChangeSubTab(id));
    },
  };
};

const AudioContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Audio);

export default AudioContainer;

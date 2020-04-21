import { connect } from 'react-redux';
import ResponsiveWrapper from '../components/ResponsiveWrapper/ResponsiveWrapper';
import { widthChange } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    name: ownProps.name,
    breakpoints: {
      small: [0, 639],
      medium: [640, 1023],
      large: [1024, '~'],
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onResize: (data) => {
      dispatch(widthChange(data));
    },
  };
};

const ResponsiveContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResponsiveWrapper);

export default ResponsiveContainer;

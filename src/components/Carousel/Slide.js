import React from 'react';

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isActive, className, index } = this.props;

    return (
      <div
        className={`vl-carousel-slide-container ${isActive() ? 'active' : null} slide-${index}`}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Slide;

import React from 'react';
import Carousel from './Carousel';

class TabCarousel extends React.Component {

  onChangeSlide = (id) => {
    const { onChangeSubTab } = this.props;
    onChangeSubTab(id);
  }

  render() {

    const { currentSubTab } = this.props;

    return (
      <div className="vl-tab-carousel-container">
        <Carousel
          onChangeSlide={this.onChangeSlide}
          currentSlide={currentSubTab}
        >
          {this.props.children}
        </Carousel>
      </div>
    )
  }
}

export default TabCarousel;

import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePreviosButton: false,
      hideNextButton: false,
    }
  }

  selectSlide = (slideIndex) => {
    const { onChangeSlide, currentSlide } = this.props;

    if (currentSlide !== slideIndex) {
      onChangeSlide(slideIndex);
    }
  }

  previosSlide = (event) => {
    event.preventDefault();
    const { currentSlide } = this.props;
    this.selectSlide(currentSlide - 1);

  }

  nextSlide = (event) => {
    event.preventDefault();
    let { currentSlide } = this.props;
    this.selectSlide(currentSlide + 1);
  }

  selectSlideIndiactor = (event, index) => {
    event.preventDefault();
    this.selectSlide(index);
  }

  render() {

    const { children, currentSlide } = this.props;

    return (
      <div className="vl-carousel-container">
        <div className="vl-carousel-inner-container">
          {children.map((slide, i) => {
            return (
              React.cloneElement(slide, {
                key: i,
                index: i,
                isActive: () => { return i === currentSlide; },
              })
            );
          })}
        </div>
        <div className="vl-carousel-controls-container">
          <div className="vl-carousel-controls">
            <button
              className={`con-left ${currentSlide === 0 ? 'hide' : null}`}
              aria-label="Previous Page"
              title="Previous Page"
              onClick={(event) => { this.previosSlide(event) }}
            >
              <span className="fa fa-angle-left" aria-hidden="true"></span>
              <span className="sr-only" aria-hidden="true">Previous Page</span>
            </button>
            <div className="vl-carousel-indicators">
              {children.map((slide, i) => {
                return (
                  <button
                    key={`carousel-indicator-${i}`}
                    className={`${currentSlide === i ? 'active' : null}`}
                    onClick={(event) => { this.selectSlideIndiactor(event, i) }}
                    data-slide-to={i}
                    aria-label={`Page ${i + 1} ${currentSlide === i ? "selected" : ""}`}
                    title={`Page ${i + 1}`}
                  >
                    <i className="fa"></i>
                  </button>
                )
              })}
            </div>
            <button
              className={`con-right ${currentSlide === children.length - 1 ? 'hide' : null}`}
              aria-label="Next Page"
              title="Next Page"
              onClick={(event) => { this.nextSlide(event) }}
            >
              <span className="fa fa-angle-right" aria-hidden="true"></span>
              <span className="sr-only" aria-hidden="true">Next Page</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel;

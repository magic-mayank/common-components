import React from 'react';


class DrawingTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTool: "select",
      selectedColor: "black",
      selectedSize: 2
    }
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.activeDrawing !== this.props.activeDrawing) {
      if (newProps.activeDrawing === false) {
        this.props.enableClearDrawingHandler(false);
        this.setState({
          selectedTool: "select",
        });
      }
    }
  }

  changeTool = (tool) => {
    const {
      activeDrawing,
      activeDrawingHandler,
      updateDrawingOptions,
      showDrawingOptions,
      showDrawingOptionsHandler
    } = this.props;

    if (tool === 'pencil' || tool === 'eraser') {
      if (activeDrawing === false) {
        activeDrawingHandler(true);
      }
      if (tool === 'pencil') {
        if (!showDrawingOptions) {
          showDrawingOptionsHandler(true);
        } else {
          showDrawingOptionsHandler(!showDrawingOptions);
        }
      } else {
        showDrawingOptionsHandler(false);
      }
    } else if (tool === 'select') {
      activeDrawingHandler(false);
    }

    this.setState({
      selectedTool: tool
    }, () => {
      updateDrawingOptions({
        tool
      });
    })
  }

  changeColor = (color) => {
    const { updateDrawingOptions, showDrawingOptionsHandler } = this.props;
    this.setState({
      selectedColor: color
    }, () => {
      updateDrawingOptions({
        color
      });
      //showDrawingOptionsHandler(false);
    })
  }

  changeSize = (size) => {
    const { updateDrawingOptions } = this.props;
    this.setState({
      selectedSize: size
    }, () => {
      updateDrawingOptions({
        size
      });
    })
  }

  decreaseSize = () => {
    const { selectedSize } = this.state;
    if (selectedSize > 1) {
      this.changeSize(selectedSize - 1);
    }
  }

  increaseSize = () => {
    const { selectedSize } = this.state;
    if (selectedSize < 3) {
      this.changeSize(selectedSize + 1);
    }
  }

  screenShot = () => {
    this.props.screenShot();
  }

  clearDrawing = () => {
    this.props.clearDrawingHandler();
  }

  render() {
    const { selectedTool, selectedColor, selectedSize } = this.state;
    const { showDrawingOptions } = this.props;

    return (
      <div className="vl-drawing-tool-container">
        <div className="vl-drawing-tool" role="navigation" aria-label="Side Panel">
          <button
            className={`vl-tool-box ${selectedTool === 'select' ? 'selected' : null}`}
            aria-pressed={selectedTool === 'select'}
            aria-label="Select"
            aria-hidden={true}
            title="Select"
            tabIndex="-1"
            onClick={() => { this.changeTool('select') }}
          >
            <span className="icomoon-Select_2" aria-hidden="true" />
          </button>
          <button
            className={`vl-tool-box ${selectedTool === 'pencil' ? 'selected' : null}`}
            aria-pressed={selectedTool === 'pencil'}
            aria-label="Pencil"
            aria-hidden={true}
            tabIndex="-1"
            title="Pencil"
            onClick={() => { this.changeTool('pencil') }}
          >
            <span className="icomoon-Pencil_2" aria-hidden="true" />
          </button>
          <div
            className={`pencil-panel ${selectedTool === 'pencil' && showDrawingOptions ? 'show' : null}`}
            role="menu"
            aria-label="Drawing Sub Menu"
          >
            <ul className="oval-container">
              <li className="oval-holder">
                <button
                  onClick={() => { this.changeColor('black'); }}
                  className={`oval oval-1 ${selectedColor === 'black' ? 'selected' : null}`}
                  title="black color pencil"
                  aria-label="black color pencil"
                />
              </li>
              <li className="oval-holder">
                <button
                  onClick={() => { this.changeColor('red'); }}
                  className={`oval oval-2 ${selectedColor === 'red' ? 'selected' : null}`}
                  title="red color pencil"
                  aria-label="red color pencil"
                />
              </li>
              <li className="oval-holder">
                <button
                  onClick={() => { this.changeColor('green'); }}
                  className={`oval oval-3 ${selectedColor === 'green' ? 'selected' : null}`}
                  title="green color pencil"
                  aria-label="green color pencil"
                />
              </li>
              <li className="oval-holder">
                <button
                  onClick={() => { this.changeColor('yellow'); }}
                  className={`oval oval-4 ${selectedColor === 'yellow' ? 'selected' : null}`}
                  title="yellow color pencil"
                  aria-label="yellow color pencil"
                />
              </li>
              <li className="oval-holder">
                <button
                  onClick={() => { this.changeColor('violet'); }}
                  className={`oval oval-5 ${selectedColor === 'violet' ? 'selected' : null}`}
                  title="violet color pencil"
                  aria-label="violet color pencil"
                />
              </li>
              <li className="oval-holder">
                <button
                  onClick={() => { this.changeColor('blue'); }}
                  className={`oval oval-6 ${selectedColor === 'blue' ? 'selected' : null}`}
                  title="blue color pencil"
                  aria-label="blue color pencil"
                />
              </li>
            </ul>
            <div className="bar-container">
              <button onClick={this.decreaseSize} className="bar-sign minus-sign" title="Size Tool Decrease" aria-label="Size Tool Decrease">
                <span className="icon-minus" aria-hidden="true"></span>
              </button>
              <div className="bar-holder" aria-label="Size tool" title="Size tool">
                <input type="range" min="1" max="3" className="bar" value={selectedSize} onChange={(event) => { this.changeSize(parseInt(event.target.value)) }} />
              </div>
              <button onClick={this.increaseSize} className="bar-sign plus-sign" title="Size Tool Increase" aria-label="Size Tool Increase">
                <span className="icon-plus" aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <button
            className={`vl-tool-box ${selectedTool === 'eraser' ? 'selected' : null}`}
            aria-pressed={selectedTool === 'eraser'}
            aria-label="Eraser"
            aria-hidden={true}
            tabIndex="-1"
            title="Eraser"
            onClick={() => { this.changeTool('eraser') }}
          >
            <span className="icomoon-Eraser_2" aria-hidden="true" />
          </button>
          <button
            className="vl-tool-box"
            disabled={!this.props.enableClearDrawing}
            aria-pressed="false"
            aria-label="Clear all"
            title="Clear all"
            onClick={() => { this.clearDrawing() }}
          >
            <span className="icomoon-ClearAll_2" aria-hidden="true" />
          </button>
          <div className="divider"></div>
          <button onClick={this.screenShot} className="vl-tool-box" aria-label="Screenshot" title="Screenshot">
            <span className="icomoon-Camera_2" aria-hidden="true" />
          </button>
        </div>
      </div>
    )
  }
}

DrawingTool.propTypes = {};

DrawingTool.defaultProps = {};

export default DrawingTool;

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "../Button";
import '../../stylesheets/components/header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this._notebookBtn = null;
    this._helpBtn = null;
    this._saveBtn = null;
    this.state = {
      skipContentOpecity: false,
    }
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (this.props.notebookPopupOpened && !newProps.notebookPopupOpened)
      this._notebookBtn.focus();

    if (this.props.helpPopupOpened && !newProps.helpPopupOpened)
      this._notebookBtn.focus();
    // this._helpBtn.focus();

    if (this.props.savePopupOpened && !newProps.savePopupOpened)
      this._saveBtn.focus();
  }

  render() {
    const {
      title,
      className,
      notebookPopupId,
      helpPopupId,
      savePopupId,
      notebookClickHandler,
      helpClickHandler,
      saveClickHandler,
      labSubmitted,
      helpPopupOpened,
      notebookPopupOpened,
      savePopupOpened,
      ...rest
    } = this.props;

    const { skipContentOpecity } = this.state;
    let opacity = skipContentOpecity ? 1 : 0;
    return (
      <header className={classNames(className, "")} {...rest} role="banner">
        <h1 className="main-title" aria-label={title}>
          {title}
        </h1>
        <a className="skip-to-main" href="#tabPanels" >Skip to Main Content</a>
        <div className="header-button-holder" role="toolbar">
          <Button
            className="notebook"
            onClick={() => notebookClickHandler(notebookPopupId)}
            ref={element => (this._notebookBtn = element)}
            aria-label="Lab Note Book"
          >
            <span className="">Lab Notebook</span>
          </Button>

          <Button
            className="commonIcon save-icon right-icon"
            title="Save"
            aria-label="Save"
            onClick={() => saveClickHandler(savePopupId)}
            disabled={labSubmitted}
            ref={element => (this._saveBtn = element)}
          >
            <span>Save</span>
          </Button>

          <Button
            className="commonIcon instructionsIcon right-icon"
            onClick={() => helpClickHandler(helpPopupId)}
            title="Information"
            ref={element => (this._helpBtn = element)}
            aria-label="Help"
          >
            <span>Help</span>
          </Button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  notebookPopupId: PropTypes.string.isRequired,
  helpPopupId: PropTypes.string.isRequired,
  savePopupId: PropTypes.string.isRequired,
  notebookClickHandler: PropTypes.func.isRequired,
  helpClickHandler: PropTypes.func.isRequired,
  saveClickHandler: PropTypes.func.isRequired
};

Header.defaultProps = {
  title: "Lab",
  notebookClickHandler: () => { },
  helpClickHandler: () => { },
  saveClickHandler: () => { }
};

export default Header;

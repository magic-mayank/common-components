import { connect } from "react-redux";
import Header from '../components/Header/Index';
// import { thunks, togglePopup } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    title: ownProps.title,
    notebookPopupId: "0",
    helpPopupId: "5",
    savePopupId: "7",
    // notebookPopupOpened: state.currentPopup.includes("0"),
    // helpPopupOpened: state.currentPopup.includes("5"),
    // savePopupOpened: state.currentPopup.includes("7"),
    // labSubmitted: state.labSubmitted,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    notebookClickHandler: id => {
      dispatch(thunks.openNoteBook(id));
    },
    helpClickHandler: id => {
      dispatch(togglePopup(id));
    },
    saveClickHandler: id => {
      // saveTincanData();
      dispatch(togglePopup(id));
    }
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;

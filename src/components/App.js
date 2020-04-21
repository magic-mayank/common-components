import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ResponsiveContainer from '../containers/ResponsiveContainer';
import HeaderContainer from '../containers/HeaderContainer';
import reducers from '../reducers';

import '../stylesheets/app.scss';

const store = createStore(reducers, applyMiddleware(
  thunk,
));

export const App = () => {
  return (
    <Provider store={store}>
      <ResponsiveContainer
        name="magic-common-components"
      >
        <div className="vl">
          <header className="app-header">
            <h1>
              Common Components
            </h1>
          </header>
          <div className="global-components-container">
            <HeaderContainer
              title="Header Component Text"
              notebookPopupId="0"
              helpPopupId="5"
              savePopupId="7"
              className="vl-header clearfix"
              // helpClickHandler={(id) => this.helpClickHandler(id)}
              // notebookPopupOpened={this.state.currentPopup.includes("0")}
              // helpPopupOpened={this.state.currentPopup.includes("5")}
              // savePopupOpened={this.state.currentPopup.includes("7")}
            />
          </div>
        </div>
      </ResponsiveContainer>
    </Provider>
  );
};

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App.js';
import { Provider } from 'react-redux'
import configureStore from './configureStore'

const initialState = window.__INITIAL_STATE__ || {firebase: { authError: null }}
const store = configureStore(initialState)

render( <AppContainer><Provider store={store}><App/></Provider></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./containers/App.js', () => {
    const App = require('./containers/App.js').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <App/>
        </Provider>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}

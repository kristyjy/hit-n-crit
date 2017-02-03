import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/app.js';
import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore();

render( <AppContainer><Provider store={store}><App/></Provider></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./containers/app.js', () => {
    const App = require('./containers/app.js').default;
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

import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import { firebase as fbConfig } from './config'
import { reactReduxFirebase } from 'react-redux-firebase'

export default function configureStore (initialState, history) {
  const createStoreWithMiddleware = compose(
    reactReduxFirebase(fbConfig,
      {
        userProfile: 'users',
        enableLogging: false
      }
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer);

  return store;
}

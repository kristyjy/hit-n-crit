import { createStore } from 'redux'
import rootReducer from './reducers'
//import actions from './actions'



export default function configureStore(preloadedState) {
	const store = createStore(
		rootReducer,
		preloadedState
	)
	//store.dispatch(actions.setSearchType(true))

	return store;
}

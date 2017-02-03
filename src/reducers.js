import initialState from './state'

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case 'searchText':
			return Object.assign({}, state, {
				searchText: action.value,
				searchTextError: '',
			})
		default:
			return state
	}
}

export default rootReducer

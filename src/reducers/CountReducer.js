const initialState = { count: 0, title: "redux counter", isLoggedIn: false };

const CountReducer = (state = initialState, action) => {
	console.log(state);

	if (action.type == "increment") {
		const newState = {
			...state,
			count: state.count + 1,
		};

		return newState;
	}

	if (action.type == "decrement") {
		const newState = {
			...state,
			count: state.count - 1,
		};

		return newState;
	}

	if (action.type == "login") {
		const newState = {
			...state,
			isLoggedIn: true,
		};

		return newState;
	}

	if (action.type == "logout") {
		const newState = {
			...state,
			isLoggedIn: false,
		};

		return newState;
	}

	return state;
};

export default CountReducer;

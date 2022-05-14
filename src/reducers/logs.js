// Import types
import { INPUT_SUCCESS, INPUT_FAIL } from "./types";

// Initial State
const initialState = {
	log: [],
};

// Switch statement -update state
export default (state = initialState, action) => {
	const { type, payload } = action;
	let { log } = state;

	switch (type) {
		case INPUT_SUCCESS:
			log = [...log, { log: payload }];
			return {
				...state,
				messages,
			};
		case INPUT_FAIL:
			return {
				...state,
			};
	}
};

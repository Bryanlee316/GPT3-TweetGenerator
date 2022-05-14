// Import types
import { INPUT_SUCCESS, INPUT_FAIL } from "./types";
// Function to handle user message

export const userInput = (topic) => async (dispatch) => {
	try {
		dispatch({ type: INPUT_SUCCESS, payload: topic });
	} catch (err) {
		dispatch({ type: INPUT_FAIL });
	}
};

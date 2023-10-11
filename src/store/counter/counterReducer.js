import { counterInitialState } from "./initialState";
import { DECREMENT, INCREMENT, SETSTEP } from "./types";

export const counterReducer = (state=counterInitialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                total: state.total + state.step,
            }
        case DECREMENT:
                return {
                    ...state,
                    total: state.total - state.step,
            }
        case SETSTEP:
        return {
            ...state,
            step: action.payload,
        };
        default:
            return state
    }
}
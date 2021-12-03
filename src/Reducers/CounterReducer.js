import { SET_DECREMENT, SET_INCREMENT } from "../Constant/CounterConstant"

const initial_state = {
  count: 0
}

export default function CounterReducer(state = initial_state, action) {
  switch (action.type) {
    case SET_INCREMENT:
      return state = { ...state, count: state.count + action.payload }

    case SET_DECREMENT:
      return state = { ...state, count: state.count - action.payload }
    default: return state
  }
}
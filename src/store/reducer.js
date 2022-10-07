import { ADD, CHANGE_NUM, ELIMINATE } from "./actions"

let initialState = []

export function setChart(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    case ELIMINATE:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    case CHANGE_NUM:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
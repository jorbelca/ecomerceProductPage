/*
 * tipos de acciones
 */

export const ADD = 'ADD'
export const ELIMINATE = 'ELIMINATE'
export const CHANGE_NUM = 'CHANGE_NUM'

/*
 * otras constantes
 */

// export const Filters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * creadores de acciones
 */

export function addTodo(text) {
  return { type: ADD, text }
}

export function completeTodo(index) {
  return { type: ELIMINATE, index }
}

export function setVisibilityFilter(index) {
  return { type: CHANGE_NUM, index }
}
const initialState = {items: []}

const shoppingListItemReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE_COUNT':
      return Object.assign({}, state, {items: state.items.concat(state.items.length + 1)})
    default:
      return state
  }
}

export default shoppingListItemReducer
const events = (state = [], action) => {
  switch(action.type){
    case "CREATE_EVENT":
      const event = {tite: action.title, body: action.body};
      const length = state.length
      let id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, {id, ...event}];
    case "DELETE_EVENT":
      const events = state.filter( state.id !== action.id )
      return [...events];
    case "DELETE_ALL_EVENT":
      return [];
    default:
      return
  }
}

export default events
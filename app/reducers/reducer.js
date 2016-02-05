
const initialState  = {
  currentVenue: {},
  listOfVenues: []
}


const venuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_LIST_OF_VENUES':
      return {...state, listOfVenues: action.venues}
    default:
      return state
  }
}

export default venuesReducer

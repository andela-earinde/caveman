
const initialState  = {
  currentVenue: {},
  venuelistDetail: {
    listOfVenues: [],
    meta: {}
  }
}


const venuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_LIST_OF_VENUES':
      let venuelistDetail = {listOfVenues: action.venues.data,
                             meta: action.venues.meta}
      return {...state, venuelistDetail}
    default:
      return state
  }
}

export default venuesReducer

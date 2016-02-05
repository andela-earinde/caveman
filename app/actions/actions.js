/**
* Note: All the actions will be on this file,
* for a large application this will not be suitable.
*/

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}


export function fetchListOfVenues() {

  return (dispatch, getState) => {
    return fetch('http://localhost:3042/api/venues')
        .then(checkStatus)
        .then(response => response.json())
        .then((data) => {
          dispatch(displayListOfVenues(data))
        })
        .catch((error) => {
          console.log('request failed', error)
        })
  }
}

function displayListOfVenues(data) {
  return {
    type: 'DISPLAY_LIST_OF_VENUES',
    venues: data
  }
}

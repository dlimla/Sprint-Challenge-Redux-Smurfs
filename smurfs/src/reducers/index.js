import { LOADING, FETCHING_SUCCESS } from "../actions"

/*
  Be sure to import in all of the action types from `../actions`
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


export const SmurfReducer = (state = initialState , action) => {
  switch(action.type) {
    case LOADING: 
      return {
        ...state,
        fetchingSmurfs:true
      }
    case FETCHING_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: null
      }
    default:
      return state;
  }
}
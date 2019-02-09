/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


import axios from 'axios';

export const LOADING = "LOADING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_ERROR = "FETCHING_ERROR"

export const ADD_SMURF = "ADD_SMURF"


export const fetchSmurfs = () => (dispatch) => {
  dispatch({type:LOADING});
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      // console.log("ACTION:", response)
      dispatch({
        type:FETCHING_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      // console.log("ERROR:", error)
      dispatch({
        type:FETCHING_ERROR,
        payload:
        "ERROR GETTING SMURFS"
      })
    })
}

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({
    type:LOADING
  })
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => dispatch( {
      type:ADD_SMURF,
      payload:response.data
    }))
    .catch(error=> {
      dispatch({
        type:FETCHING_ERROR,
        payload:
        "CANNOT ADD SMURFS"
      })
    })
}
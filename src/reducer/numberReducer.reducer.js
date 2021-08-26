import data from '../data/data'
import { RANDOM_NUMBER } from '../actions/actionTypes.action'

const INITIAL_STATE = {
  data: data,
  isLoading: true
}

const numberReducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case RANDOM_NUMBER:
      return {
        ...state,
        data: action
      }

    default:
      return state
  }
}

export default numberReducer

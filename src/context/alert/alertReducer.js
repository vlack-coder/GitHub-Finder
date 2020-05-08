import {
    SET_ALERT
    } from '../types'
import alertContext from './alertContext'



export default (state, action) => {
switch (action, state) {
    case SET_ALERT:
      return  {
        ...state,
        alert: payload
        }
        
        break;

    default:
        break;
}}

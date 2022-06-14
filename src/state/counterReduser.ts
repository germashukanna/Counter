import {StatusType} from "../App";


const COLL_BACK_HANDLER ='COLL_BACK_HANDLER'
const COLL_BACK_HANDLER_ZERO ='COLL_BACK_HANDLER_ZERO'
const MAX_VALUE = 'MAX_VALUE'
const MiN_VALUE = 'MIN_VALUE'
const SET_SET = 'SET_SET'
const SET_ERROR = 'SET_ERROR'
const SET_COUNTER = 'SET_COUNTER'


export type collBackHandlerAT = ReturnType<typeof collBackHandlerAC>
export type collBackHandlerZeroAT = ReturnType<typeof collBackHandlerZeroAC>
export type maxValueAT = ReturnType<typeof maxValueAC>
export type minValueAT = ReturnType<typeof minValueAC>
export type setSetAT = ReturnType<typeof setSetAC>
export type setErrorAT = ReturnType<typeof setErrorAC>
export type setCounterAT = ReturnType<typeof setCounterAC>


export type ActionType = collBackHandlerAT | collBackHandlerZeroAT
    | maxValueAT | minValueAT | setSetAT | setErrorAT | setCounterAT

const initialState = {
    minValue: 0,
    maxValue: 5,
    count: 0,
    status: 'set' as StatusType
}

type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
  switch (action.type){
      case COLL_BACK_HANDLER:
          return {...state, count: state.count + 1}
      case COLL_BACK_HANDLER_ZERO:
          return {...state, count: action.minValue}
      case MiN_VALUE:
          return {...state, minValue: action.minValue}
      case MAX_VALUE:
          return {...state, maxValue: action.maxValue}
      case SET_SET:
          return {...state, status: 'set'}
      case SET_ERROR:
          return {...state, status: 'error'}
      case SET_COUNTER:
          return {...state, status: 'counter'}
      default:
          return state
  }
}

export const collBackHandlerAC = () => ({type: COLL_BACK_HANDLER} as const)
export const collBackHandlerZeroAC = (minValue: number) => ({type: COLL_BACK_HANDLER_ZERO, minValue} as const)
export const maxValueAC = (value: number) => ({type: MAX_VALUE, maxValue: value} as const)
export const minValueAC = (value: number) => ({type: MiN_VALUE, minValue: value} as const)
export const setSetAC = () => ({type: SET_SET} as const)
export const setErrorAC = () => ({type: SET_ERROR} as const)
export const setCounterAC = () => ({type: SET_COUNTER} as const)
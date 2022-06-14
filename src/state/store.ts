import { combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from "./counterReduser";
import {loadState, saveState} from "./LocalStorage";
import {StatusType} from "../App";


const rootReducer = combineReducers({
    counter: counterReducer
})

const preloadedState = {
    counter: {
        minValue: loadState('startValue') ? loadState('startValue') : 0,
        maxValue: loadState('maxValue') ? loadState('maxValue') : 5,
        count: loadState('startValue') ? loadState('startValue') : 0,
        status: 'set' as StatusType
    }
}
//loadState()

export const store = legacy_createStore(rootReducer, preloadedState)

// store.subscribe(() => {
//     saveState({
//         counter: store.getState().counter
//     })
// })

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
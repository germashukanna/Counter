import React from 'react';
import './App.css';
import {SetCounter} from "./Counter/SetCounter/SetCounter";
import {CounterModule} from "./Counter/CounterModule/CounterModule";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {collBackHandlerAC, collBackHandlerZeroAC, maxValueAC, minValueAC, setSetAC} from "./state/counterReduser";

export type StatusType = 'counter' | 'set' | 'error'

function App() {
    const count = useSelector<AppRootStateType, number>(state => state.counter.count)
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const status = useSelector<AppRootStateType, StatusType>(state => state.counter.status)
    const dispatch = useDispatch()


    const collBackHandler = () => {
        count < maxValue && dispatch(collBackHandlerAC())
    }

    const collBackHandlerZero = () => {
        dispatch(collBackHandlerZeroAC(minValue))
    }

    const ChangeStartValue = (value: number) => {
        value > 9999 ? dispatch(minValueAC(9999)) :
            dispatch(minValueAC(value))
        dispatch(setSetAC())
    }
    const ChangeMaxValue = (value: number) => {
        value > 9999 ? dispatch(maxValueAC(9999)) :
            dispatch(maxValueAC(value))
        dispatch(setSetAC())
    }


    return (
        <div className="App">
            <SetCounter
                status={status}
                minValue={minValue}
                maxValue={maxValue}
                ChangeStartValue={ChangeStartValue}
                ChangeMaxValue={ChangeMaxValue}
                dispatch={dispatch}
            />

            <CounterModule count={count}
                           status={status}
                           minValue={minValue}
                           maxValue={maxValue}
                           collBackHandler={collBackHandler}
                           collBackHandlerZero={collBackHandlerZero}

            />
        </div>
    );
}


export default App;

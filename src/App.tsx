import React, {useEffect, useState} from 'react';
import './App.css';
import {SetCounter} from "./Counter/SetCounter/SetCounter";
import {CounterModule} from "./Counter/CounterModule/CounterModule";

export type StatusType = 'counter' | 'set' | 'error'

function App() {

    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(minValue)
    const [status, setStatus] = useState<StatusType>('counter')


    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            setMinValue(JSON.parse(startValueAsString))
            setCount(JSON.parse(startValueAsString))
        }

        let maxValueAsString = localStorage.getItem('maxValue')
        maxValueAsString && setMaxValue(JSON.parse(maxValueAsString))

        let statusAsString = localStorage.getItem('status')
        statusAsString && setStatus(JSON.parse(statusAsString))

    }, [])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('status', JSON.stringify(status))
    }, [minValue, maxValue, status])

    const collBackHandler = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }
    const collBackHandlerZero = () => {
        setCount(minValue);
    }

    const ChangeStartValue = (value: number) => {
        isNaN(value) ? setMinValue(0) :
            value > 9999 ? setMinValue(9999) :
                setMinValue(value)
        setStatus('set')
    }
    const ChangeMaxValue = (value: number) => {
        isNaN(value) ? setMaxValue(0) :
            value > 9999 ? setMaxValue(9999) :
                setMaxValue(value)
        setStatus('set')
    }


    return (
        <div className="App">
            {/*<div className='SetCounter'>*/}
            <SetCounter
                minValue={minValue}
                maxValue={maxValue}
                ChangeStartValue={ChangeStartValue}
                ChangeMaxValue={ChangeMaxValue}
                status={status}
                setStatus={setStatus}
                setCount={setCount}
            />
            {/*</div>*/}
            {/*<div className='CounterModule'>*/}

            <CounterModule count={count}
                           minValue={minValue}
                           maxValue={maxValue}
                           collBackHandler={collBackHandler}
                           collBackHandlerZero={collBackHandlerZero}
                           status={status}
            />
            {/*</div>*/}
        </div>
    );
}

export default App;

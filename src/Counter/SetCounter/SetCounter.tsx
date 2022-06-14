import {Input} from "../Input";
import {Button} from "../Button";
import s from "./SetCounter.module.css"
import {Dispatch} from "redux";
import {collBackHandlerZeroAC, setCounterAC, setErrorAC} from "../../state/counterReduser";
import React, {useEffect} from "react";
import {StatusType} from "../../App";
import {saveState} from "../../state/LocalStorage";


type  SetCounterPropsType = {
    minValue: number
    maxValue: number
    ChangeStartValue: (value: number) => void
    ChangeMaxValue: (value: number) => void
    status: StatusType
    dispatch: Dispatch

}

export const SetCounter: React.FC<SetCounterPropsType> = ({minValue, status, maxValue,
                                                              ChangeMaxValue, ChangeStartValue, dispatch
}) => {

    useEffect(() => {
     (maxValue <= minValue || minValue < 0 || maxValue <= 0) && dispatch(setErrorAC())
    })

    const setButtonOnChange = () => {
        saveState(minValue, maxValue)
        dispatch(setCounterAC())
        dispatch(collBackHandlerZeroAC(minValue))
    }

    return (
        <div className={s.SetCounter}>
            <div className={s.InputModule}>
                <span className={s.spanO}>MAX VALUE:</span> <Input setValue={maxValue} callBack={ChangeMaxValue}
                                 error={maxValue <= minValue || maxValue <= 0}/>
                <span className={s.spanT}>START VALUE:</span>  <Input setValue={minValue} callBack={ChangeStartValue}
                                  error={status === "error"}/>
            </div>
            <div className={s.SetButtonModule}>
                <Button name={'set'} callBack={setButtonOnChange} disabled={status !== 'set'}/>
            </div>
        </div>
    )
}
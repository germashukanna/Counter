import {Input} from "../Input";
import {Button} from "../Button";
import {StatusType} from "../../App";
import s from "./SetCounter.module.css"


type  SetCounterPropsType = {
    minValue: number
    maxValue: number
    ChangeStartValue: (value: number) => void
    ChangeMaxValue: (value: number) => void
    status: StatusType
    setStatus: (value: StatusType) => void
    setCount: (value: number) => void

}

export const SetCounter = (props: SetCounterPropsType) => {

    if (props.maxValue <= props.minValue || props.minValue < 0) {
        props.setStatus('error')
    }
    const setButtonOnChange = () => {
        props.setStatus('counter')
        props.setCount(props.minValue)
    }

    return (
        <div className={s.SetCounter}>
            <div className={s.InputModule}>
                <span className={s.spanO}>MAX VALUE:</span> <Input setValue={props.maxValue} callBack={props.ChangeMaxValue}
                                 error={props.maxValue <= props.minValue || props.maxValue <= 0}/>
                <span className={s.spanT}>START VALUE:</span>  <Input setValue={props.minValue} callBack={props.ChangeStartValue}
                                  error={props.status === "error"}/>
            </div>
            <div className={s.SetButtonModule}>
                <Button name={'set'} callBack={setButtonOnChange} disabled={props.status !== 'set'}/>
            </div>
        </div>
    )
}
import {ChangeEvent} from "react";
import s from './Input.module.css'

type InputPropsType = {
    setValue: number
    callBack: (value: number) => void
    error?: boolean

}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.valueAsNumber)
    }

    return (
        <div>
            <input className={props.error ? s.error : s.input}
                   type="number" value={props.setValue} onChange={onChangeHandler}/>
        </div>
    )
}
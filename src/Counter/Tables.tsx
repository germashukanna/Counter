import s from './Tables.module.css'
import {StatusType} from "../App";


type PropsTitleType = {
    count: number
    maxValue: number
    status: StatusType
}

export const Tables = (props: PropsTitleType) => {
    return (
        props.status === 'error' ?
            <div className={s.error}>
                Incorrect value!
            </div> :
            props.status === 'set' ?
                <div className={s.set}>
                    Enter values and press "SET"
                </div> :
                <div>
                    <div className={props.count === props.maxValue ? s.five : s.one}>{props.count}</div>
                </div>
    )
}
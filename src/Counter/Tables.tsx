import s from './Tables.module.css'
import {StatusType} from "../App";
import React from "react";




type PropsTitleType = {
    count: number
    maxValue: number
    status: StatusType
}

export const Tables: React.FC<PropsTitleType> = ({count, status, maxValue}) => {
    return (
        status === 'error' ?
            <div className={s.error}>
                Incorrect value!
            </div> :
            status === 'set' ?
                <div className={s.set}>
                    Enter values and press "SET"
                </div> :
                <div>
                    <div className={count === maxValue ? s.five : s.one}>{count}</div>
                </div>
    )
}
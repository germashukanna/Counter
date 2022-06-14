import s from './Button.module.css'
import React from "react";

type PropsButtonType = {
    name: string
    callBack: () => void
    disabled?: boolean

}

export const Button: React.FC<PropsButtonType> = ({name, disabled, callBack}) => {


    return (
        <div>
            <div><button className={s.btn} disabled={disabled} onClick={callBack}>{name}</button>
        </div></div>
    )
}
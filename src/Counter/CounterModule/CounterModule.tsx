import {Button} from "../Button";
import {Tables} from "../Tables";
import s from "./CounterModule.module.css"
import {StatusType} from "../../App";


type  CounterModulePropsType = {
    count: number
    maxValue: number
    minValue: number
    status: StatusType
    collBackHandler: () => void
    collBackHandlerZero: () => void
}

export const CounterModule = (props: CounterModulePropsType) => {
    return (
        <div className={s.CounterModule}>
            <div className={s.TablesModule}>
            <Tables count={props.count} maxValue={props.maxValue} status={props.status}/>
        </div>
            <div className={s.ButtonModule}>
            <Button name={"inc"} callBack={props.collBackHandler}
                    disabled={props.count === props.maxValue || props.status !== 'counter'}/>
            <Button name={"reset"} callBack={props.collBackHandlerZero}
                    disabled={props.count === props.minValue || props.status !== 'counter'}/>
        </div>
        </div>
    )
}
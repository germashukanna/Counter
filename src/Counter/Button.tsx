import s from './Button.module.css'

type PropsButtonType = {
    name: string
    callBack: () => void
    disabled?: boolean

}

export const Button = (props: PropsButtonType) => {


    return (
        <div>
            <div><button className={s.btn} disabled={props.disabled} onClick={props.callBack}>{props.name}</button>
        </div></div>
    )
}
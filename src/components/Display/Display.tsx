import React, {ChangeEvent} from "react";
import style from "./Display.module.css"


type DisplayPropsType = {
    title: string
    classNameInput: string
    classNameBlock: string
    value: number
    onChangeCallback: (inputValue: number) => void
    setDisabled:(boolean: boolean) => void
    checkCondition:string
}

export const Display = React.memo( (props: DisplayPropsType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.setDisabled(true)
        props.onChangeCallback(+e.currentTarget.value)
    }

    return <div className={style.inputValues}>
        <div> {props.title} </div>
        <input type="number"
               value={props.value}
               onChange={onChangeHandler}/>
    </div>
})
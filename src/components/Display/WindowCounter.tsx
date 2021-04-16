import React from "react";
import style from "./Window.module.css"


type WindowCounterPropsType = {
    countValue:number
    maxValue:number
    startValue:number
}

export const WindowCounter = React.memo( (props:WindowCounterPropsType) => {

    const condition = props.startValue < 0 || props.startValue > props.maxValue || props.startValue === props.maxValue

    return <div className={'blockValues window'}>
        <span className={props.countValue < props.maxValue  ? 'startValue' : 'maxValue'}>{condition ? 'Incorrect Value' : props.countValue}</span>
    </div>
})
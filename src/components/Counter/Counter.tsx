import React from "react";
import {useDispatch} from "react-redux";
import {incrementAC, resetAC} from "../Redux/counterReducer";
import {Buttons} from "../Button/Button";
import {WindowCounter} from "../Display/WindowCounter";
import style from "./Counter.module.css"


type CounterPropsType = {
    disabled:boolean
    startValue: number
    maxValue:number
    countValue:number
}

export const Counter = React.memo((props:CounterPropsType) => {

    const action = useDispatch()
    const onClickHandlerInc = () => action(incrementAC())
    const onClickHandlerRes = () => action(resetAC())

    return <div className={style.counterWrapper}>

        <WindowCounter startValue={props.startValue} countValue={props.countValue} maxValue={props.maxValue}/>

        <div className={style.screen}>

            <Buttons title={'Inc'}
                     disable={props.countValue >= props.maxValue || props.disabled}
                     onClickHandler={onClickHandlerInc}/>
            <Buttons title={'Res'}
                     disable={props.countValue <= props.startValue || props.disabled}
                     onClickHandler={onClickHandlerRes}/>

        </div>
    </div>
})


import React from 'react';
import style from "./Counter.module.css";
import Button from "../Button/Button";

type CounterPropsType = {
    counter: number
    add: () => void
    reset: () => void
    disabled?: boolean
    minValue: number
    maxValue: number
    error: string
}

export const Counter = React.memo((props: CounterPropsType) => {
    return (
        <div className={style.counterWrapper}>
            <div className={`${props.counter === props.maxValue ? style.maximum : style.usual} ${style.screen}` }>
                {props.error === "work" ? props.counter : props.error}
            </div>
            <div className={style.buttons}>
                <Button title={"add"}
                        callback={props.add}
                        disabled={props.error !== "work" || props.counter === props.maxValue}/>
                <Button title={"reset"}
                        callback={props.reset}
                        disabled={props.error !== "work"}/>
            </div>
        </div>
    )
})


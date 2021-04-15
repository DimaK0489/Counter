import React from 'react';
import style from "./Button.module.css";

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled: boolean
}


export const Button = React.memo((props:ButtonPropsType) => {
    return(
        <button className={style.button}
                onClick={props.callback}
                disabled={props.disabled}
                >{props.title}
        </button>
    )
})

export default Button
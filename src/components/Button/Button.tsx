import React from "react";
import style from "./Button.module.css"

type ButtonsPropsType = {
    title: string
    onClickHandler: () => void
    disable: boolean
}

export const Buttons = React.memo((props: ButtonsPropsType) => {
    const callback = () => props.onClickHandler()
    return <button className={style.button}
                   disabled={props.disable}
                   onClick={callback}>
        {props.title}</button>
})
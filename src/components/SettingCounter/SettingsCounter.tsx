import React, {ChangeEvent, useState} from "react";
import style from "./Settings.module.css"
import Button from "../Button/Button";
import {StateType} from "../../App";

export type SettingsType = {
    maxValue: number
    minValue: number
    settingValue: (state: StateType) => void
    saveState: (key: string, state: StateType) => void
    error: string
    setError: (error: string) => void
}

export const Settings = React.memo((props: SettingsType) => {
    let [minValue, setMinValue] = useState<number>(props.minValue)
    let [maxValue, setMaxValue] = useState<number>(props.maxValue)

    const checkValue = (maxValue: number, minValue: number, oldMaxValue: number, oldMinValue: number) => {
        if (maxValue <= minValue || maxValue > 10 || minValue < 0) {
            props.setError("incorrect value")
        } else if (isNaN(minValue) || isNaN(maxValue)) {
            props.setError("enter value")
        } else if (oldMaxValue !== maxValue || oldMinValue !== minValue) {
            props.setError("press\"se\"")
        } else {
            props.setError("work")
        }
    }
    const onChangeForMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number.parseInt(e.currentTarget.value)
        checkValue(newValue, minValue, maxValue, minValue)
        setMaxValue(newValue)
    }
    const onChangeForMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number.parseInt(e.currentTarget.value)
        checkValue(maxValue, newValue, minValue, maxValue)
        setMinValue(newValue)
    }
    let setCallback = () => {
        props.settingValue({maxValue, minValue})
        checkValue(maxValue, minValue, minValue, maxValue)
        props.saveState("savedValues", {maxValue, minValue})
    }

    return (
        <div className={style.counterWrapper}>
            <div className={style.screen}>
                <input id="outlined-password-input"
                       name={"Max Value"}
                       defaultValue={props.maxValue}
                       type="number"
                       onChange={onChangeForMinValue}
                       onClick={setCallback}
                />
                <input id="outlined-password-input"
                       name={"Max Value"}
                       defaultValue={props.maxValue}
                       type="number"
                       onChange={onChangeForMaxValue}
                       onClick={setCallback}/>

                <div className={style.buttons}>
                    <Button disabled={props.error !== 'work' && props.error !== 'press \'set\''}
                            title={'set'}
                            callback={setCallback}/>
                </div>
            </div>
        </div>
    )
})
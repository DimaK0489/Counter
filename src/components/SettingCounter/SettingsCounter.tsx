import React from "react";
import style from "./Settings.module.css"
import {useDispatch} from "react-redux";
import {changedMaxValueAC, changedStartValueAC, setValuesAC} from "../Redux/counterReducer";
import {Display} from "../Display/Display";
import {Buttons} from "../Button/Button";

type SettingsPropsType = {
    setDisabled: (boolean: boolean) => void
    startValue: number
    maxValue: number
}

export const Settings = React.memo((props: SettingsPropsType) => {

    const action = useDispatch()

    const onChangeHandlerStart = (inputValue: number) => action(changedStartValueAC(inputValue))

    const onChangeHandlerMax = (inputValue: number) => action(changedMaxValueAC(inputValue))

    const setCallback = () => {
        action(setValuesAC())
        localStorage.setItem('startValue', props.startValue.toString())
        localStorage.setItem('maxValue', props.maxValue.toString())
        props.setDisabled(false)
    }

    const incorrectValue = 'Incorrect Value'
    const condition = props.startValue < 0 || props.startValue > props.maxValue || props.startValue === props.maxValue ? incorrectValue : ''

    return <div className={style.counterWrapper}>

        <div className={style.settings}>
            <Display title={'Start Value'}
                     classNameInput={style.inputValues}
                     onChangeCallback={onChangeHandlerStart}
                     classNameBlock={'startValue'}
                     value={props.startValue}
                     setDisabled={props.setDisabled}
                     checkCondition={condition}
            />

            <Display title={'Max Value'}
                     classNameInput={style.inputValues}
                     onChangeCallback={onChangeHandlerMax}
                     classNameBlock={'maxValue'}
                     value={props.maxValue}
                     setDisabled={props.setDisabled}
                     checkCondition={condition}
            />
        </div>

        <div className={style.button}>
            <Buttons title={'Set'}
                     disable={props.startValue === props.maxValue
                     || props.startValue > props.maxValue
                     || props.startValue < 0
                     || props.maxValue < 0}
                     onClickHandler={setCallback}/>
        </div>
    </div>
})
import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from './components/SettingCounter/SettingsCounter';
import {RootStoreType} from "./components/Redux/store";
import {saveMaxValue, saveStartValue} from "./components/Redux/counterReducer";
import {useDispatch, useSelector} from "react-redux";

export type StateType = {
    maxValue: number
    minValue: number
}

function App() {
    const [disabled, setDisabled] = useState<boolean>(false)

    const countValue = useSelector<RootStoreType, number>(state => state.count.countValue)
    const maxValue = useSelector<RootStoreType, number>(state => state.count.maxValue)
    const startValue = useSelector<RootStoreType, number>(state => state.count.startValue)

    const action = useDispatch()

    useEffect(() => {
        localStorage.getItem('startValue'.toString())
        localStorage.getItem('maxValue'.toString())

        action(saveStartValue(Number(localStorage.getItem('startValue'))))
        action(saveMaxValue(Number(localStorage.getItem('maxValue'))))
    }, [action])

    return (
        <div className="App">
            <Settings
                setDisabled={setDisabled} startValue={startValue} maxValue={maxValue}/>
            <Counter
                disabled={disabled} startValue={startValue} maxValue={maxValue} countValue={countValue}/>
        </div>
    );
}

export default App;

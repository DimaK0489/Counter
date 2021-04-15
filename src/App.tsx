import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from './components/SettingCounter/SettingsCounter';

export type StateType = {
    maxValue: number
    minValue: number
}

function App() {
    function saveState<StateType>(key: string, state: StateType) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<StateType>(key: string, defaultState: StateType) {
        const stateAsString = localStorage.getItem(key)
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as StateType
        return defaultState
    }

    const state: StateType = restoreState<StateType>("savedValues", {maxValue: 10, minValue: 0})

    let [minValue, setMinValue] = useState<number>(state.minValue)
    let [maxValue, setMaxValue] = useState<number>(state.maxValue)
    let [counter, setCounter] = useState<number>(state.minValue)
    let [error, setError] = useState<string>("work")

    const add = () => {
        setCounter(counter + 1)
    }
    const reset = () => {
        setCounter(state.minValue)
    }
    const settingValues = (state: StateType) => {
        setMaxValue(state.maxValue)
        setCounter(state.minValue)
        setMinValue(state.minValue)
    }

    return (
        <div className="App">
            <Settings
                minValue={state.minValue}
                maxValue={state.maxValue}
                error={error}
                saveState={saveState}
                setError={setError}
                settingValue={settingValues}
            />
            <Counter
                counter={counter}
                add={add}
                reset={reset}
                minValue={minValue}
                maxValue={maxValue}
                error={error}/>
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Counter from "./components/counter";
import Button from "./components/button";



function App() {

    let [state, setState] = useState<number>(0)
    let [style, setStyle] = useState<string>('')
    let [value, setValue] = useState<number>(0)

    const num = () => {
        setValue(value+1)
    }


    let styles = ''
    const counterIncrement = () => {
        let count = state + 1
        if (count >= 5) {
            styles = 'colorRed'
            setStyle(styles)
        }
        setState(count)
    }

    const counterReset = () => {
        setStyle('')
        setState(0)
    }

    return (
        <div className="App">
            <>
                <span className='title'>Counter</span>
                <div className='CounterWrapper'>
                    <Counter
                        states={state}
                        styles={style}
                    />
                    <div className="buttonBlock">
                        <Button
                            title='Inc'
                            counter={counterIncrement}
                            disabled={state === 5}
                        />
                        <Button
                            title='Reset'
                            counter={counterReset}
                            disabled={state === 0}
                        />
                    </div>
                </div>
            </>

            <>
                <div className='CounterWrapper'>
                    <div className={"inputs"}>
                        <input title={"max value:"} type="number" min={"1"} value={value} max={"10"}
                               onChange={(e)=>{num()}}/>
                        <input title={"start value:"} type="number" min={"0"} value={value} max={"10"} />
                    </div>
                    <button className={"Button"}>Set</button>
                </div>
            </>
        </div>
    );
}

export default App;

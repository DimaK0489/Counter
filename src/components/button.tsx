import React from 'react';
import '../App.css';

type ButtonPropsType = {
    title: string
    counter: () => void
    disabled: boolean
}


function Button(props:ButtonPropsType){
    return(
        <button className={'Button'}
                onClick={() => props.counter() }
                disabled={props.disabled}
                >{props.title} </button>
    )
}

export default Button
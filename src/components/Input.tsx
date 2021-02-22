import React, {useState} from "react";

export function Input() {
    let [value, setValue] = useState<number>()

    return (
        <>
            <div className={"inputs"}>
                <input title={"MAX VALUE"} type="number" min={1} max={10} />
                <input title={"START VALUE"} type="number" min={0} max={10} />
            </div>
            <button className={"Button"} >Set</button>
        </>
    )
}


import { useState } from "react";

function Solution ({hexColor, correctButtonIndex}) {
    const [solution, setSolution] = useState(false)

    return (
        <>
            <div style={{display: "flex", justifyContent: "center", alignItems: "ceneter", marginTop: "25px", marginBottom: "25px"}}>
                <input type="checkbox" value={solution} onChange={() => {setSolution(!solution)}} style={{ marginRight: "15px"}}/>
                Do you want to receive a solution?
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "ceneter"}}>
                {solution ? `The color is ${hexColor} and the correct button is number ${correctButtonIndex+1}` : null}
            </div>
        </>
    )
}

export default Solution;
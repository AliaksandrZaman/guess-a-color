import { getRandomColor } from "./randomColorGenerator"

function GuessButton ({hexColor, index, handleButtonClick}) {
    const colorToShow = hexColor != null ? hexColor : getRandomColor()

    return(
        <>
            <div onClick={() => handleButtonClick(index)} 
            style={{
                height: '50px',
                width: '100px',
                border: '1px solid black',
                borderRadius: '50px',
                display: "flex",
                alignItems: "center",
                justifyContent: "center"}}>
                {colorToShow}
            </div>
        </>
    )
}

export default GuessButton
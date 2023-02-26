import GuessButton from "./guessButton";

function ListOfButtons ({hexColor, correctButtonIndex, handleButtonClick}) {

    return(
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly" 
            }}>
                <GuessButton hexColor={correctButtonIndex === 0 ? hexColor : null} index={correctButtonIndex === 0} handleButtonClick={handleButtonClick}/>
                <GuessButton hexColor={correctButtonIndex === 1 ? hexColor : null} index={correctButtonIndex === 1} handleButtonClick={handleButtonClick}/>
                <GuessButton hexColor={correctButtonIndex === 2 ? hexColor : null} index={correctButtonIndex === 2} handleButtonClick={handleButtonClick}/>
            </div>
        </>
    )
}

export default ListOfButtons;
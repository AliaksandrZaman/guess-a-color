function ScoreAndStreakField ({yourScore, yourStreak}) {
    return(
            <div style={{display: "flex",
                    alignItems: "center", 
                    justifyContent: "center",
                    flexDirection: "column",
                    marginTop: "30px"}}>
                <div>Your score is: {yourScore}</div>
                <div>Your streak is: {yourStreak}</div>
                {yourStreak >= 5 ? "Seems like you've got how to play this game!" : null}
            </div>
    )
}

export default ScoreAndStreakField;
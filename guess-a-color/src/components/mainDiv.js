function MainDiv ({hexColor}) {
    return (
        <>
           <div 
           style={{
            height: '300px',
            width: '500px',
            border: '1px solid black',
            borderRadius: '50px',
            marginBottom: "100px",
            backgroundColor: hexColor
          }}></div>
        </>
    );
}

export default MainDiv
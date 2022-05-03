import React from "react";

const userOutput = (props) => {

    const style = {
        backgroundColor : 'grey',
        border : '2px solid black',
        textAlign : 'Center',
        maxWidth : '350px',
        margin: '20px auto',
        padding: '20px'
        
    }
    return (
        <div style={style}>
            <p>
                username : {props.username}
            </p>
        </div>
    )

}



export default userOutput;
import React from "react";
function Create()
{
    return(
        <div style={{background:"lightblue", border:"1px solid blue",borderRadius:"5px",padding:"10px",fontSize:"16px"}}>
            <h1 style={{color:"green"}}>Inline Style in JSX</h1>
            <p style={{color:"darkblue"}}>This is a paragraph with inline styles applied</p>
        </div>
    );
}
export default Create;
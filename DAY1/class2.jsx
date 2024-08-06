import React from 'react';
function file()
{
    let myarray=["a","e","i","o"];
    myarray.push("u");
    console.log(myarray);
    alert("Check the console input!");
}

function Cw2()
{
    return(
        <div>
            <button onClick={file}>CLASSEXERCISE2</button>
        </div>
    )
}
export default Cw2;

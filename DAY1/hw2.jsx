import React from 'react';
function file1()
{
    let age=25;
    let Name="dharshini";
    let Status=true;
    let userDefault=undefined;
    let responsevalue=null;
    alert("Check the console output!");
     console.log("Age: "+age+"\nStatus: "+Status+"\nName: "+Name+"\nUserDefault: "+userDefault+"\nResponse Value: "+responsevalue);
}
function Hw2()
{
    return(
        <div>
          <button onClick={file1}>PAH2</button>  
        </div>
    )
}
export default Hw2;

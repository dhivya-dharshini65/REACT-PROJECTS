import React from 'react';
function File()
{
    const name1="Dhivya";
    const name2="Dhivya";
    const primitive=name1===name2;
    const object1={name:"Dhivya"};
    const object2={name:"Dhivya"};
    const Reference=object1===object2;
    console.log(primitive);
    console.log(Reference);
}
function Cy1()
{
    return(
        <div>
            <button onClick={File}>CY1</button>
        </div>
    )
}
export default Cy1;
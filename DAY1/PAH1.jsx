import React from 'react';
function Team()
{
    return (
    <div>
        <p>This is Team Functional Component</p>
    </div>
    )
}
const Worlds = () =>
{
    return(
        <div>
            <Team/>
        </div>
    )
}
export default Worlds;

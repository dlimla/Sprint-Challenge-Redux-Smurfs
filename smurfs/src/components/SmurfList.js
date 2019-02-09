import React from "react";

import AddSmurf from './AddSmurf'

const SmurfList = props => {
    // console.log(props)
    return (
        <div>
            <ul>
            {props.smurfs.map(smurf => {
                return (
                    <li>
                        {smurf.name}
                    </li>
                )
            })}
            </ul>
        </div>
        
    )
}

export default SmurfList;
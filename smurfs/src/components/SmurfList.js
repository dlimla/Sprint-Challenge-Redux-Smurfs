import React from "react";

const SmurfList = props => {
    console.log(props)
    return (
        <ul>
           {props.smurfs.map(smurf => {
               return (
                   <li>
                       {smurf.name}
                   </li>
               )
           })}
        </ul>
    )
}

export default SmurfList;
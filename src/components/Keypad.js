// Code Keypad Component Here

import React from 'react';

function handleChange(event) {console.log("Entering password...")}


function Keypad(){
    return(
    <input type="password" placeholder="Entering password..." onChange={handleChange}/>
     )}


export default Keypad;
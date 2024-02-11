// Code EyesOnMe Component Here
// Code EyesOnMe Component Here
import React from "react";
function EyesOnMe(){
    const focusing=()=>{console.log("Good!")}
    const bluring=()=>{console.log("Hey! Eyes on me!")}
  return(
   <button onFocus={focusing} onBlur={bluring}>Eyes on me</button>


  )
}

export default EyesOnMe;

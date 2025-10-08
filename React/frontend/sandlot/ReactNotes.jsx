import { useEffect } from "react"
import { useState } from "react"


//AT ITS MOST BASIC LEVEL, A COMPONENT IS A FUNCTION THAT RETURNS A PIECE OF UI

function UseHooks() {

    // USESTATE
    // HOLD A STATE AND UPDATE IT LATER
    // BUILT AS AN ARRAY, WHICH IS DESTRUCTURED INTO 2 PARTS
    // 1ST PART: THE VARIABLE THAT HOLDS THE STATE
    // 2ND PART: A FUNCTION THAT UPDATES THE STATE
    const [counter, setCounter] = useState(0);

    // USEEFFECT
    // RUN THIS FUNCTION IF THE DEPENDENCIES CHANGE
    // A FUNCTION THAT RUNS SIDE EFFECTS
    // 1ST ARGUMENT: A FUNCTION THAT CONTAINS THE SIDE EFFECT CODE
    // 2ND ARGUMENT: AN ARRAY OF DEPENDENCIES (IF EMPTY, THE EFFECT RUNS ONLY ONCE AFTER THE INITIAL RENDER)
    useEffect(() => {
        alert("useEffect called")
    }, []);


    // USECONTEXT




    const addToCounter = () => {
        setCounter(counter + 1);
    }




    return (
        <>
            <p> using react hooks</p>
            {/* NOTE THAT THE CURLY BRACKETS IN JSX ARE USED AS AN 'ESCAPE' TO EMBED JAVASCRIPT EXPRESSIONS */}
            <p > {counter} </p>
            <button onClick={addToCounter}> Add to counter </button>
        </>
    )
}
export default UseHooks
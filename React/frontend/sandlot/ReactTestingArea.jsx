import { useEffect } from "react"
import { useState } from "react"
import { ShowReactImages } from "./ReactComponents";
import { ShowReactList } from "./ReactComponents";
import { UseEventhandler } from "./ReactComponents";

//AT ITS MOST BASIC LEVEL, A COMPONENT IS A FUNCTION THAT RETURNS A PIECE OF UI

function UseHooks() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert("useEffect called")
    }, [interfaceSwitch]);


    let imageContent
    let listContent

    var interfaceSwitch = false;


    const addToCounter = () => {
        setCounter(counter + 1);
        flipInterface(counter)
    }

    const flipInterface = (counter) => {
        if (counter > 5) {
            interfaceSwitch = true;
            alert("interface switched");
        }
    }

    if (counter > 5) {
        imageContent = <ShowReactImages />;
        listContent = <ShowReactList />;
    }

    return (
        <>
            <p> using react hooks</p>
            <p > {counter} </p>
            <button onClick={addToCounter}> Add to counter </button>
            <div> {imageContent} </div>

            <div> {listContent} </div>
            <div><UseEventhandler /></div>
        </>
    )
}
export default UseHooks
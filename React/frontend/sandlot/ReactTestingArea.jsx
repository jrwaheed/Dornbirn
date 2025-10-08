import { useEffect } from "react"
import { useState } from "react"


//AT ITS MOST BASIC LEVEL, A COMPONENT IS A FUNCTION THAT RETURNS A PIECE OF UI

function UseHooks() {

    const coolImage = {
        name: 'Yummy Food',
        imgUrl: 'https://i.imgur.com/IVN7yYA.jpeg',
        imageSize: 90,

    }


    const [counter, setCounter] = useState(0);


    useEffect(() => {
        alert("useEffect called")
    }, [interfaceSwitch]);



    var interfaceSwitch = false;
    var content;

    const addToCounter = () => {
        setCounter(counter + 1);
        flipInterface(counter)
    }

    const flipInterface = (counter) => {
        if (counter > 5) {
            interfaceSwitch = true;
            alert("interface switched");
            content = <img src={coolImage.imgUrl} alt={coolImage.name} width={coolImage.imageSize} />
        } else {
            content = <p>Counter is less than 5</p>
        }
    }

    return (
        <>
            <p> using react hooks</p>
            <p > {counter} </p>
            <button onClick={addToCounter}> Add to counter </button>
            <div> {content} </div>
        </>
    )
}
export default UseHooks
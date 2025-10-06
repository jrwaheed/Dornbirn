import { useEffect, useState } from 'react';

function Dummy() {

    const zebra = 5
    const [countieState, setCountie] = useState(0);

    useEffect(() => {
        console.log('useEffect ran')
    }, [zebra,]);


    const handleClick = () => {
        // If you pass a function as nextState, it will be treated as an updater function. It must be pure, should take the pending state as its only argument, and should return the next state. 

        setCountie(countieState + 1);
    }
    return (
        <div>
            <p>HELLO WORLD</p>

            <div>
                <button class='inline-block-child' onClick={handleClick}>CLICK ME</button>
                <p class='inline-block-child'>{countieState}</p>
            </div>

        </div>
    )
}

function useEffectExample() {
    const [ticker, setTicker] = useState("APPL");

    useEffect(() => {


        return () => {
            <div>
                <p class='inline-block-child'>ENTERE THE TICKER HERE</p>
                <input class='inline-block-child' value={ticker} onChange={(enteredTicker) => setTicker(enteredTicker.target.value)} />
            </div>
        }
    }, [ticker]);
}

export default Dummy
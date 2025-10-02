import { useState } from 'react';

function Dummy() {

    const zebra = 5
    const [countieState, setCountie] = useState(0);

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
export default Dummy
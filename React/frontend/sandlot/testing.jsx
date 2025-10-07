import { useEffect, useState } from 'react';
import { getPolyExhangeRate } from '../src/services/api';

function Dummy() {

    const [baseState, setBase] = useState();
    const [quoteState, setQuote] = useState();
    const [rateState, setRate] = useState();

    const fetchExchangeRate = async (baseCurrency, quoteCurrency) => {
        try {
            const rate = await getPolyExhangeRate(baseCurrency, quoteCurrency);
            setRate(rate);
            alert("The exchange rate is: ", rate);
        } catch (error) {
            console.error("Error fetching exchange rate:", error);
        }
    }
    // useEffect(() => {
    //     fetchExchangeRate()
    // }, [baseCurrency, quoteCurrency]);




    const handleClick = () => {
        fetchExchangeRate(baseState, quoteState);


        // If you pass a function as nextState, it will be treated as an updater function. It must be pure, should take the pending state as its only argument, and should return the next state. 


        // setCountie(countieState + 1);
    }
    return (
        <div>
            <p>HELLO WORLD</p>

            <div>
                <form onSubmit={handleClick} className="search_form">
                    <p className='inline-block-child'>ENTERE THE BASE AND QUOTE CURRENCIES</p>
                    <input className='inline-block-child' type="text" placeholder="-" onChange={(e) => setBase(e.target.value)} />
                    <input className='inline-block-child' type="text" placeholder="-" onChange={(e) => setQuote(e.target.value)} />
                    <button type="submit">CLICK ME</button>
                </form>
                <p className='inline-block-child'>The exchange rate is: {rateState}</p>
            </div>
        </div>
    )
}


export default Dummy
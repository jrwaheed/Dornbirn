'use client'


import {useState, useEffect} from "react";

export function MyButton() {
    const [current, setCurrent] = useState(0);
    
   const updateButton = ()=> {
        setCurrent(current + 1);
        alert('You clicked me')
        
    }


    return (
    <button type = "button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=> updateButton()}>
     {`Clicked ${current} times`}
    </button>
  );
}



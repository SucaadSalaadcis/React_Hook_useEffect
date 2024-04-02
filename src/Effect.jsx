import React, { useEffect, useState } from 'react'

function Effect() {

    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count+1);
    }
    const handleMinus = () => {
        if(count > 0){
            setCount(count-1);
        }
    }

   /*  useEffect(()=> {
        console.log("Hello useEffect")
        },[]) // only renders first reload on the page  */

   /*  useEffect(()=> {
        console.log("Hello useEffect")
        },[count]) // renders first reaload and everytime when the variable changes 
  */
    useEffect(()=> {
        console.log("Hello useEffect")
        }) // runs this code every load on page and every time when a varibale changes
 
  return (
    <div>
        <button onClick={handlePlus} className='bg-lime-400 rounded-md py-3 px-5 mt-10 ml-10'>+</button>
        <button onClick={handleMinus} className='bg-sky-400 rounded-md py-3 px-5 mt-10 ml-10'>-</button>
        <label className='ml-10 font-bold'> Count is : {count} </label>
    </div>
  )
}

export default Effect
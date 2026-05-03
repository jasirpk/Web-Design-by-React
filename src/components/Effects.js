import React, { useEffect, useState } from 'react'

const Effects = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    useEffect(()=>{
        console.log("useEffect called");
    },[]);
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <h1>Count1: {count1}</h1>
        <button onClick={() => setCount1(count1 + 1)}>
            Increment Count1
        </button>
    </div>
  )
}

export default Effects
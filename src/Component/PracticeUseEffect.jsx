import React, { useEffect, useState } from 'react'

function PracticeUseEffect() {

  const [count,setCount] = useState(0)  
  const [name,setName] = useState('Harry')

  // for count
  useEffect(() => {
    console.log("Count is changed",count);
  }, [count])
  
  // for name
    useEffect(() => {
      console.log("Name is changed",name);
    }, [name])
  
  return (
    <>
    <div className='flex border text-center justify-center py-10' >
    <div className=' w-[20%]' >
    <p>Value of count is {count}</p>
    <button onClick={()=>setCount(prev=>prev+1)} 
    className='border p-1 cursor-pointer bg-amber-50' >Click here</button>
    </div>

    <div>
      <p>Name is {name}</p>
      <button onClick={()=>setName(name === "Harry"?"Garry":"Harry")} 
    className='border p-1 cursor-pointer bg-amber-50' >Click here</button>
    </div>
    </div>
    </>
  )
}

export default PracticeUseEffect
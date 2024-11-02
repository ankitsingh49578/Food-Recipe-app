import React from 'react'
import { useState } from 'react';
import MealCard from './MealCard';

function MainPage() {
  
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  }
  const handleSearch = async () => {
    if(input == ""){
      setMsg("Please Enter Something");
      setData(null);
    }
    else{
      const url = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
      const jsonData = await url.json();
      // console.log(jsonData.meals);
      setData(jsonData.meals);
      setMsg("");
    }
  }
//   console.log(data);
  return (
    <div className='text-center min-h-[96vh]'>
        <h1 className='p-4 text-3xl font-bold'>FOOD RECIPE APP</h1>
        <div className='mb-10'>
            <input onChange={handleInput} type="text" placeholder='Enter here' className='md:w-[400px] w-[250px] text-lg h-10 p-2 bg-slate-200 rounded-md mr-3'/>
            <button onClick={handleSearch} className='border-black p-1 px-2 rounded-md bg-yellow-400 text-white font-semibold text-xl'>Search</button>
        </div>
        <h3 className="text-xl">{msg}</h3>
        <MealCard detail={data}/>
    </div>
  )
}

export default MainPage
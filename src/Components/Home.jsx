import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';

const Home = () => {

    const API_KEY = "";

    const urlData = async() =>{

    try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=6&tags=vegetarian`
        );
            const data = await res.json();
            // console.log("line 21", data);

      } catch (error) {
        console.log(error);
      }
    }
    urlData();

  return (
    <div>
       <div className='bg-green-200 mt-24 xl:h-[70vh] lg:h-[70vh] md:h-[70vh] sm:h-[95vh] h-[95vh] xl:flex-row lg:flex-row md:flex-row flex-col sm:flex-col flex'>

            <div className='bg-white lg:w-2/5 md:w-2/5 w-full xl:w-2/5 sm:w-full sm:h-[70%] xl:h-full lg:h-full md:h-full h-[70%] rounded-r-full flex flex-col justify-center items-start px-3'>

                <img className=' h-[390px] w-[600px] rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdCpr5rG2QnLIVfdP8zy7n7XXcErwnPA24A&s' />
            </div>

            <div className='xl:w-[50vw] lg:w-[50vw] md:w-[50vw] w-full sm:w-full  xl:h-[80%] lg:h-[80%] md:h-[80%] h-[40%] sm:h-[40%] px-6 flex xl:items-start md:items-start lg:items-start items-center flex-col justify-center sm:items-center gap-y-14'>

               <p className='xl:text-5xl lg:text-5xl md:text-4xl sm:text-5xl text-5xl'> Try <span className=' font-bold text-red-500'>Dishes</span> Out !</p>
               <p className=' text-lg leading-8 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate natus possimus, adipisci eligendi aliquid rerum cupiditate nulla itaque soluta !.</p>
            </div>
       </div>
       <SearchBar  />
     
    </div>
  )
}

export default Home;


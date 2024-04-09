import React from 'react'
import { useLocation } from 'react-router-dom';

const Detail = () => {
    const location = useLocation();
    const detailData = location.state;
    // console.log("line 5", detailData.analyzedInstructions[0].steps);

    const detailSteps = detailData.analyzedInstructions[0].steps;

    const ingredients = detailData.extendedIngredients;

    const ingredientName = ingredients.map(ingredient => ingredient.name).join(' , ')

  return (
    <div className='p-2 mt-32  '>
        <div className='bg-green-200  flex xl:flex-row lg:flex-row md:flex-col flex-col  sm:flex-col  justify-evenly p-5 h-fit border-2 border-green-400 px-2 gap-y-8 min-w-[25rem'>

        <div className='md:w-full sm:w-full w-full lg:w-fit xl:w-fit  flex xl:items-start md:items-center
         lg:items-start items-center  sm:items-center md:justify-center xl:justify-start lg:justify-start sm:justify-center justify-center '>

            <div className='border-black items-center flex flex-col bg-white rounded border h-[45vh] md:w-[47vw] lg:w-[25vw] sm:w-[56vw] w-[75vw] xl:w-[25vw] pl-4 pr-4 pb-2  justify-around '>
               
               <img className='h-[18rem] rounded pb-1' src={detailData.image} />
                <p className='text-red-700 p-2 text-2xl font-semibold  text-center'>{detailData.title}</p>
               </div>
            </div>

            <div className='xl:w-[48rem] lg:w-[48rem] md:w-[42rem] sm:w-[38rem] w-[28rem] flex flex-col gap-y-5'>
              <div className='p-2'>
                 <p className='text-3xl text-red-600 font-semibold '>Ingredients -</p>
               
                <p className='p-4 text-lg'>{ingredientName}</p>  
              </div>

              <div className='p-2'>
                <p className='text-3xl font-semibold  text-red-600'>Step by step  -</p>

                <div className='p-4 xl:w-[48rem] lg:w-[48rem] md:w-[45rem] sm:w-[38rem] w-[28rem]  '>
               {detailSteps.map((detailStep, index)=> (
                   
                    <p className='p-1' key={index}>{detailStep.number}.  {detailStep.step}</p>
               ))}
               </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Detail
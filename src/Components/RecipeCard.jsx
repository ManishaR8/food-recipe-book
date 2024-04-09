import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Detail from './Detail';
import MainSection from './MainSection';


const RecipeCard = ({key, title, img, recipeId}) => {

  const [detailData, setDetailData] = useState([]);

  const API_KEY = "043d2493cfdb4dcfa156a1afc4711d7a";

  useEffect(() => {
  const getDetail = async () => {
    try{
      let res = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`);

    let data = await res.json();
    let readMore = data;
    setDetailData(readMore);

    }
    catch (err) {
      return err;
    }
  };
  
  if (recipeId) {
    getDetail();
  }
}, [recipeId,  API_KEY]);

  // console.log("line 32", detailData)


  const navigate = useNavigate();

  let handleClick = () => {
    
    navigate("/detail", {state: detailData });
  }

  return (
    <div>
        <div className='p-3 '>
        <div className='border-green-700 border-2 flex flex-col bg-green-200 rounded  h-[49vh] p-6 pt-5 pl-5 pr-5 pb-2 w-96 justify-around '>
            <img className='h-[18rem] rounded pb-2 ' src={img} />
            <p className='text-red-700 p-3 text-xl text-center'>{title}</p>
            {/* <p className=''>{description}</p> */}
          <div className='items-center flex justify-center'>

          <button onClick={handleClick} className='bg-red-600 text-white p-2 rounded-3xl px-5'> Read More </button>
          
          {/* <p>{recipeId}</p>
          */}
          </div>
            
        </div>

        
        
        </div>
    </div>
  )
}

export default RecipeCard

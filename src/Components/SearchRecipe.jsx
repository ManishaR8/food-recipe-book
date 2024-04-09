import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Detail from './Detail';
import MainSection from './MainSection';


const SearchRecipe = ({ title, img, recipeId}) => {

  const [detailData, setDetailData] = useState([]);

  // console.log("line 11", recipeId)
  const API_KEY = "04b2e36c7f1042c9bfc6ce908a0d21e2";

  useEffect(() => {
  const getDetail = async () => {
    try{
      let res = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`);

    let data = await res.json();
    let readMore = data;
    // console.log("line 20", readMore);
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
        <div className='border-black flex flex-col bg-white rounded border h-[45vh] pt-5 pl-5 pr-5 pb-2 w-96 justify-around '>
            <img className='h-[17rem] rounded pb-2 ' src={img} />
            <p className='text-xl'>{title}</p>
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

export default SearchRecipe
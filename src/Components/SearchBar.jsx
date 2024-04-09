import React, { useEffect, useState } from 'react';
import MainSection from './MainSection';
import SearchRecipe from './SearchRecipe';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [textVal, setTextVal] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);

  const API_KEY = '04b2e36c7f1042c9bfc6ce908a0d21e2';

  useEffect(() => {
    const fetchData = async () => {
      if (searchText.trim() !== '') {
        try {
          const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchText}&maxFat=25&number=2&apiKey=${API_KEY}`);
          const data = await res.json();

          // console.log("line 14", data.results[0]);
          // console.log("line 14", data.results);

          if (data.results && data.results.length > 0) {
            setSearchData(data.results);
          } else {
            setSearchData(null);
            setShowNoDataMessage(true);
            setTimeout(() => {
              setShowNoDataMessage(false); 
            }, 5000);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        setSearchData(null);
      }
    };

    fetchData();
  }, [searchText]); 

  function handleChange(event){
    setTextVal(event.target.value);
    console.log(event.target.value);
  }

  function handleClick(){
    setSearchText(textVal);
    setTextVal(""); 
  }

  // console.log("line 133", searchData[0].id)

  return (
    <div>
        <div className=' items-center flex justify-center h-48'>
            <input 
                className='p-3 rounded xl:w-[27rem] lg:w-[26rem] sm:w-[27rem] w-[20rem] md:w-[26rem] outline-none border  border-green-700'
                type="search" 
                value={textVal}
                onChange={handleChange}
                placeholder='Search for Food Recipe'/>

                <button onClick={handleClick} className='bg-red-500 px-4 py-3 text-white rounded-r-md '>Search</button>
        </div>

        {searchText.length === 0 ? (
          <MainSection />
        ) : searchData ? (
         <>
         <div>
        <div className=' w-full items-center flex justify-center p-5 pb-9'>
            <p className='text-5xl text-red-700 font-semibold'>{searchText}</p>
        </div>
         <div className='flex flex-wrap justify-around pt-5'>
          
         {searchData.map((data, index) => (
                    <SearchRecipe  title={data.title} img={data.image} recipeId={data.id} />
                ))}
                </div>
                </div>
          </> 
        ) : (
          showNoDataMessage ?  <div className=' w-full items-center flex justify-center p-5 pb-9'>
          <p className='text-5xl text-red-700 font-semibold'>{searchText}</p>
      </div> : <MainSection />
        )}
    </div>
  );
}

export default SearchBar;

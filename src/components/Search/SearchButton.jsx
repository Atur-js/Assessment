import React, { useState , useContext} from "react";
import { RoutingContext, pagesMapping } from '../../Route';


// search button and show result

const SearchButton = () => {
  const [text, setText] = useState("");

  // routing pages
   const { setPage } = useContext(RoutingContext);

  // get event.target.value
  const getInputValue = (event) => {
    const userValue = event.target.value;
    setText(event.target.value);
    console.log(userValue);
  };


  

  return (
    <>
      <div className="ml-44 dark:sm:ml-0.5 sm:ml-2  md:ml-8 lg:ml-11 xl:ml-16 dark:-mt-1.5">
        <form className="shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-lg p-1.5 ">
          <div class="relative ">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-black dark:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={getInputValue}
              onClick={() => setPage(pagesMapping.search)}
              type="search"
              id="default-search"
              class="block sm:w-[20px] md:w-[30px] lg:w-[30px] xl:w-[100px] 2xl:w-[120px]
              dark:h-[36px] h-[25px] p-1 pl-10 w-full text-sm text-black bg-white rounded-lg 
              dark:bg-[#9599e6] dark:placeholder-black dark:text-black "
              placeholder=" Search"
              required
            />
          </div>
        </form>
      </div>
      <div
        className="flex justify-center absolute top-3/4 left-1/2 mt-64 mr-96
        dark:text-white"
      >
        {text}
      </div>
    </>
  );
}

export default SearchButton;
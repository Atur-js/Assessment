import React from "react";
import SearchButton from "./Search/SearchButton";

//settings component

export const Settings = () => {
  return (
    <React.Fragment>
      <div>
        <div className="flex justify-center  absolute top-16 left-2/3
          mt-[50px] -ml-[34px] sm:mt-[14px] md:mt-[14px] lg:mt-[14px]
          sm:ml-[40px] md:ml-[100px] lg:ml-[130px] xl:ml-[60px]">
          <SearchButton />
        </div>
      </div>

      <div className=" flex justify-center absolute top-1/2 left-1/2 mt-12
        ml-32 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5 dark:text-white ">
        <p>Settings</p>
      </div>
    </React.Fragment>
  );
};

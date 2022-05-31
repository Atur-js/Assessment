import React from 'react';
import GoogleDrive from "../../assets/google-drive.svg";
import Hubspot from "../../assets/hubspot.svg";
import Pipedrive from "../../assets/pipedrive.svg";
import SearchButton from "../Search/SearchButton";
import { Link } from 'react-router-dom';

// Display three buttons and search  After selecting campaigns 

export const Campaigns = () => {
  
  
  return (
    <React.Fragment>
      <div
        className="flex justify-center sm:-ml-1 md:ml-1 lg:-ml-8 xl:-ml-8 absolute
      top-16 left-1/3 ml-3  mt-[50px] sm:mt-[14px] md:mt-[14px] lg:mt-[14px]"
      >
        <div>
          <Link to="/google">
            <button
              class="flex justify-center w-[160px] md:w-[100px] sm:w-[52px]
              xs:w-[40] dark:bg-[#9599e6] bg-white dark:hover:bg-[#D0D0D0] hover:bg-[#D0D0D0]
              text-black font-semibold  py-2 px-4  shadow-[0_5px_13px_rgba(0,0,0,0.35)]
              hover:border-transparent rounded-lg"
            >
              <img
                className=" w-5 mr-1 sm:ml-2  mr-3"
                alt="Campaigns"
                src={GoogleDrive}
              />
              <p className="block sm:hidden   md:hidden">Google Drive</p>
            </button>
          </Link>
        </div>

        <div className="ml-6 sm:ml-2 md:ml-1  lg:ml-1">
          <Link to="/campaigns/hubspot">
            <button
              class="flex justify-center  w-[130px] md:w-[100px] sm:w-[52px] dark:bg-[#9599e6]
              bg-white dark:hover:bg-[#D0D0D0] hover:bg-[#D0D0D0] text-black font-semibold
              py-2 px-4 shadow-[0_5px_13px_rgba(0,0,0,0.35)] hover:border-transparent rounded-lg"
            >
              <img
                className=" w-5 mr-1 sm:w-10  mr-3 sm:-mr-0.5 block sm:block"
                alt="Campaigns"
                src={Hubspot}
              />
              <p className="block sm:hidden md:hidden">Hubspot</p>
            </button>
          </Link>
        </div>
        <div className="ml-6 sm:ml-2 md:ml-1 lg:ml-1">
          <Link to="/campaigns/pipedrive">
            <button
              class="flex justify-center w-[130px] md:w-[100px] sm:w-[52px] dark:bg-[#9599e6]
              bg-white dark:hover:bg-[#D0D0D0] hover:bg-[#D0D0D0] text-black font-semibold  py-2 px-4
              shadow-[0_5px_13px_rgba(0,0,0,0.35)] hover:border-transparent rounded-lg"
            >
              <img
                className=" w-5 mr-1 sm:ml-2 mr-3"
                alt="settings"
                src={Pipedrive}
              />
              <p className="block sm:hidden md:text-sm md:hidden">Pipedrive</p>
            </button>
          </Link>
        </div>

        <SearchButton />
      </div>
    </React.Fragment>
  );
}


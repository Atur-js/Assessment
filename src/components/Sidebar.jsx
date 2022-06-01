import React, {useContext} from "react";
import Toggle from "./Theme/Toggle";
import { RoutingContext, pagesMapping } from '../Route';
import { ReactComponent as Settings } from "../assets/settings.svg";
import { ReactComponent as Campaigns } from "../assets/campaign.svg";

export const Sidebar = () => {

  // routing pages
   const { setPage } = useContext(RoutingContext);
  // sidebar--- add toggle Dark/lite mode, campaigns, settings

  return (
    <>
      <div className="flex flex-col  ml-3 dark:border-[#4d4d4d] border-r-2
        border-slate-300 w-1/4 h-96 float-left h-screen">

        <div className="pl-3 mt-4 md:pl-0 sm:pl-4">
          <Toggle />
        </div>

        <div className="pl-3 sm:pl-1 mt-10 fill-black dark:fill-white hover:fill-white">
          
            <button onClick={() => setPage(pagesMapping.campaigns)} className=" hover:fill-white dark:text-white sm:-ml-1
              md:-ml-5 w-[150px] md:w-[140px] sm:w-[70px] flex justify-center
              bg-transparent hover:text-white  hover:bg-[#6864CF] text-black
              font-semibold  py-2  px-2  hover:border-transparent rounded-lg">

              <Campaigns class="w-6 h-6 fill-current  sm:ml-4  md:-py-2 mr-3 fill-black
              dark:fill-white hover:fill-white" />

              <p className="hover:bg-[#6864CF] md:-ml-3 md:w-[90px] w-[100px] sm:w-[0] 
              sm:hover:bg-transparent hover:text-white block sm:hidden ">
                Campaigns
              </p>

            </button>
          
        </div>

        <div className="pl-3 sm:pl-1">
            <button onClick={() => setPage(pagesMapping.settings)}
              class="dark:text-white flex justify-center bg-transparent
              hover:text-white hover:bg-[#6864CF] text-black font-semibold  py-2
              px-4 hover:border-transparent rounded-lg w-[150px] sm:w-[70px] md:w-[100px]
              sm:-ml-1 md:-ml-3"
            >
              <div className="-ml-2">
                <Settings class="w-6 h-6 sm:ml-4 mr-3 md:ml-2  fill-black dark:fill-white " />
              </div>
              <p className="block sm:hidden  w-[100px] sm:w-[0]">Settings</p>
            </button>
          </Link>
        </div>

      </div>
    </>
  );
};

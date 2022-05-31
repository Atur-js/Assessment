import React from "react";
import {Link} from "react-router-dom";
import Toggle from "./Theme/Toggle";
import { ReactComponent as Settings } from "../assets/settings.svg";
import { ReactComponent as Campaigns } from "../assets/campaign.svg";

export const Sidebar = () => {

  // sidebar--- add toggle Dark/lite mode, campaigns, settings

  return (
    <>
      <div className="flex flex-col  ml-3 dark:border-[#4d4d4d] border-r-2
        border-slate-300 w-1/4 h-96 float-left h-screen">

        <div className="pl-3 mt-4 md:pl-0 sm:pl-4">
          <Toggle />
        </div>


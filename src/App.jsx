
import { Sidebar } from "./components/Sidebar";
import {  Route, Routes, Navigate } from "react-router-dom";
import { Campaigns } from "./components/Campaigns/Campaigns";
import { Home } from "./components/Campaigns/Home";
import { Google } from "./components/Campaigns/Google";
import { Settings } from "./components/Settings";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import Hubspot from "./components/Campaigns/Hubspot";
import Search from "./components/Search/Search";
import {Pipedrive} from "./components/Campaigns/Pipedrive";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="flex justify-center  dark:bg-[#1e1e24]">
          <div
            className=" flex flex-col m-16 lg:m-5 md:m-6 sm:m-1
            dark:border-[#4d4d4d] border-2  w-screen h-5/6 rounded-xl
            shadow-[0_20px_70px_5px_rgba(0,0,0,0.5)]"
          >
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/google" element={<Google />} />
              <Route path="/campaigns/hubspot" element={<Hubspot />} />
              <Route path="/campaigns/search" element={<Search />} />
              <Route path="/campaigns/pipedrive" element={<Pipedrive />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

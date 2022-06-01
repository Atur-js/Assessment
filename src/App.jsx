import { useContext } from 'react';
import { pagesMapping, RoutingContext } from './Route';
import { Sidebar } from "./components/Sidebar";
import { Campaigns } from "./components/Campaigns/Campaigns";
import { Home } from "./components/Campaigns/Home";
import { Google } from "./components/Campaigns/Google";
import { Settings } from "./components/Settings";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import Hubspot from "./components/Campaigns/Hubspot";
import Search from "./components/Search/Search";
import {Pipedrive} from "./components/Campaigns/Pipedrive";

function App() {

  // useContext for routing pages
  
  const { page } = useContext(RoutingContext);
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
            {(pagesMapping.home === page) && <Home />}
            {(pagesMapping.campaigns === page) && <Campaigns />}
            {(pagesMapping.settings === page) && <Settings />}
            {(pagesMapping.google === page) && <Google />}
            {(pagesMapping.hubspot === page) && <Hubspot />}
            {(pagesMapping.pipedrive === page) && <Pipedrive />}
            {(pagesMapping.search === page) && <Search />}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

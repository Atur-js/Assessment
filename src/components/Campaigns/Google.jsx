import React from 'react'
import { Campaigns } from './Campaigns';

export const Google = () => {
  return (
    <>
      <Campaigns />
      <div className="flex justify-center absolute top-1/2 left-1/2
        mt-12 ml-32  sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5 dark:text-white">
        Google
      </div>
    </>
  );
}

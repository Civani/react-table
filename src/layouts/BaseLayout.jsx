import React from "react";
import Sidebar from "../feature/shared/components/sidebar";
import Navbar from "../feature/shared/components/navbar";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <>
      <div className="relative flex flex-col-reverse md:flex-row">
        <div className="sticky bottom-0 left-0 w-full md:sticky md:top-0 md:left-0 md:h-screen md:w-60">
          <Sidebar />
        </div>

        <div className="flex w-full flex-col bg-backgound ">
          <Navbar />

          <div className="px-5 md:px-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default BaseLayout;

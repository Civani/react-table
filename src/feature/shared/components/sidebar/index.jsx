import React from 'react';
import { RiDashboardLine } from 'react-icons/ri';
import { TbCopy } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { MdLogout, MdSettings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../../config/supabaseClient';

function Sidebar() {
  const navigate = useNavigate();
  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      navigate('/auth');
    }
  }
  
  return (
    <>
      <div className=" flex w-full items-center bg-white py-2 text-gray5 md:h-full md:flex-col md:py-5">
        <div className="my-16 hidden items-center md:flex">
          <TbCopy className="mr-2 text-3xl text-blue9" />
          <p className=" text-xl font-semibold">Company</p>
        </div>

        <div className="flex h-full w-full justify-center px-3 md:flex-col">
          <div className="flex w-9/12 gap-10 md:w-full md:flex-col">
            <div className="flex cursor-pointer flex-col p-1.5 py-1 sm:flex-row sm:hover:rounded-md sm:hover:border-2 sm:hover:border-white md:justify-start md:pl-6">
              <RiDashboardLine className="text-xl text-gray5 sm:mr-3 " />
              <p className="text-xs sm:text-sm ">Dashboard</p>
            </div>

            <div className="flex cursor-pointer flex-col p-1.5 py-1 sm:flex-row sm:hover:rounded-md sm:hover:border-2 sm:hover:border-white md:justify-start md:pl-6">
              <CgProfile className="text-xl text-gray5 sm:mr-3 " />
              <p  onClick={()=>navigate("/manage-restaurants")} className="text-xs sm:text-sm ">Restaurant</p>
            </div>

            <div className="flex cursor-pointer flex-col p-1.5 py-1 sm:flex-row sm:hover:rounded-md sm:hover:border-2 sm:hover:border-white md:justify-start md:pl-6">
              <MdSettings className="text-xl text-gray5 sm:mr-3 " />
              <p className="text-xs sm:text-sm ">Settings</p>
            </div>
          </div>
        </div>

        <div className="flex cursor-pointer justify-end px-3 py-1 sm:flex-row sm:hover:rounded-md sm:hover:border-2 sm:hover:border-white md:justify-start md:pl-6">
          <MdLogout className="text-xl text-gray5 sm:mr-3 " />
          <p className="text-xs sm:text-sm " onClick={() => signOutUser()}>
            Logout
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

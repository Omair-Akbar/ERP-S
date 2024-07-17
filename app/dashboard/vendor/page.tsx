"use client"
//COMPONENTS
import Nav from "../components/common/nav";
import VendorSearchBar from "../components/vendor/VendorSearchBar";
import VendorsList from "../components/vendor/VendorsList";
import VendorInputFields from "../components/vendor/VendorInputFields";
import NewVendor from "../components/vendor/NewVendor";

//HOOKS
import React, { useState } from "react";

//ICONS
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Vendor() {

  let [page, setPage] = useState(true)

  const handlePage = () => {
    setPage(!page)
  }


  return (
    <div className="bg-white">
      <Nav />

         {/* Rendor Conditionally */}
                 {/* <NewVendor/> */}
     
      {page ?
        <div>
          <div className="min-h-screen bg-gray-100 ">
            <main>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center mb-4">
                  <VendorSearchBar />
                  <button onClick={handlePage} className="text-sm bg-[#DDFF8F] text-black p-[15.24px] rounded-[11.43px]">Add New Vendor<AddCircleOutlineIcon className="mx-1" /></button>
                </div>
                <VendorsList />
              </div>
            </main>
          </div>
        </div>
        :
        <div className="bg-white p-8 shadow-lg w-full">
            <VendorInputFields />        
            <div className="flex justify-end gap-4">
              <button
                onClick={handlePage}
                className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                Cancel
              </button>
              <div className="py-2 px-10 ">
              </div>
            </div>
        </div>
      }

    </div>
  );
};


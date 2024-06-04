import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import FilterForm from "../../Commons/FilterForm";
import DialogForm from "../../Commons/DialogsForm";
import DemoDialog from "../../Commons/DemoDialog";
import Dropdown from "../../Commons/DropDown";

export default function TableHeader() {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDemoDialog, setOpenDemoDialog] = useState(false);

  return (
    <>
      <div className=" bg-white flex flex-col md:flex-row gap-x-1 p-3 pr-6 justify-between item-start md:items-center  rounded-[30px]">
        <div className="h-[41px] flex flex-row items-center gap-3 p-4 bg-[#FAF7FE] rounded-full ">
          <div className="">
            <MagnifyingGlassIcon className="w-[14px] h-[14px] text-[#8f9bba] " />
          </div>
          <input
            className="outline-none px-2  h-[41px] bg-[#FAF7FE] text-[#8F9BBA] text-sm font-[DM Sans] font-normal rounded-full"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-row justify-between items-center mt-2 md:mt-0">
          <button
            type="button"
            title="Add Device"
            className="hover:bg-gray-100 hover:rounded-full p-2"
            onClick={() => setOpenDialog((pre) => !pre)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>

          <button
            title="Export Data"
            type="button"
            className="hover:bg-gray-100 hover:rounded-full p-2"
            onClick={() => {
              setOpenDemoDialog((pre) => !pre);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </button>

          <Dropdown>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </Dropdown>

          <button
            title="Filter Form"
            className="hover:bg-gray-100 hover:rounded-full p-2"
            onClick={() => {
              setOpen((pre) => !pre);
            }}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <FilterForm
        open={open}
        setOpen={setOpen}
      />
      <DialogForm
        open={openDialog}
        setOpen={setOpenDialog}
      />
      <DemoDialog
        open={openDemoDialog}
        setOpen={setOpenDemoDialog}
      />
    </>
  );
}

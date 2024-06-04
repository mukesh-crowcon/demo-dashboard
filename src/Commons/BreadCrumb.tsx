import {
  Popover,
  PopoverButton,
  Transition,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function BreadCrumb({ activePage }: { activePage: string }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="text-sm text-gray-400 leading-3">
          Pages / <span className="font-bold">{activePage}</span>
        </div>
        <div className="text-3xl mt-1 font-bold text-gray-600">
          {activePage}
        </div>
      </div>

      <div className="gap-2 flex ">
        <Popover
          as="div"
          className="relative inline-block text-left h-full"
        >
          <PopoverButton
            title="Columns"
            className="inline-flex w-56 h-full border-3 border-c-blue bg-c-light-blue-3  justify-between gap-x-1.5 rounded-full text-c-blue px-3 py-2 text-sm font-semibold  hover:bg-gray-100 hover:rounded-full"
          >
            Customer
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-c-blue-"
              aria-hidden="true"
            />
          </PopoverButton>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <PopoverPanel
              anchor="bottom"
              className="z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-3 px-4">
                <div className="relative flex items-start py-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900"
                    >
                      Serial No.
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start py-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900"
                    >
                      Asset No.
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start py-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900"
                    >
                      Business Unit
                    </label>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>
        <Popover
          as="div"
          className="relative inline-block text-left"
        >
          <PopoverButton
            title="Columns"
            className="inline-flex w-56 h-full border-3 border-c-blue bg-c-light-blue-3  justify-between gap-x-1.5 rounded-full text-c-blue px-3 py-2 text-sm font-semibold  hover:bg-gray-100 hover:rounded-full"
          >
            Business Unit
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-c-blue-"
              aria-hidden="true"
            />
          </PopoverButton>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <PopoverPanel
              anchor="bottom"
              className="z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-3 px-4">
                <div className="relative flex items-start py-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900"
                    >
                      Serial No.
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start py-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900"
                    >
                      Asset No.
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start py-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900"
                    >
                      Business Unit
                    </label>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}

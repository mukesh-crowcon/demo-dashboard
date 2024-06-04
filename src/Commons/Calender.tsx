import React from "react";
import { classNames } from "./utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
const days = [
  { date: "2021-12-27" },
  { date: "2021-12-28" },
  { date: "2021-12-29" },
  { date: "2021-12-30" },
  { date: "2021-12-31" },
  { date: "2022-01-01", isCurrentMonth: true },
  { date: "2022-01-02", isCurrentMonth: true },
  { date: "2022-01-03", isCurrentMonth: true },
  { date: "2022-01-04", isCurrentMonth: true },
  { date: "2022-01-05", isCurrentMonth: true },
  { date: "2022-01-06", isCurrentMonth: true },
  { date: "2022-01-07", isCurrentMonth: true },
  { date: "2022-01-08", isCurrentMonth: true },
  { date: "2022-01-09", isCurrentMonth: true },
  { date: "2022-01-10", isCurrentMonth: true },
  { date: "2022-01-11", isCurrentMonth: true },
  { date: "2022-01-12", isCurrentMonth: true, isToday: true },
  { date: "2022-01-13", isCurrentMonth: true },
  { date: "2022-01-14", isCurrentMonth: true },
  { date: "2022-01-15", isCurrentMonth: true },
  { date: "2022-01-16", isCurrentMonth: true },
  { date: "2022-01-17", isCurrentMonth: true },
  { date: "2022-01-18", isCurrentMonth: true },
  { date: "2022-01-19", isCurrentMonth: true },
  { date: "2022-01-20", isCurrentMonth: true },
  { date: "2022-01-21", isCurrentMonth: true },
  { date: "2022-01-22", isCurrentMonth: true, isSelected: true },
  { date: "2022-01-23", isCurrentMonth: true },
  { date: "2022-01-24", isCurrentMonth: true },
  { date: "2022-01-25", isCurrentMonth: true },
  { date: "2022-01-26", isCurrentMonth: true },
  { date: "2022-01-27", isCurrentMonth: true },
  { date: "2022-01-28", isCurrentMonth: true },
  { date: "2022-01-29", isCurrentMonth: true },
  { date: "2022-01-30", isCurrentMonth: true },
  { date: "2022-01-31", isCurrentMonth: true },
  { date: "2022-02-01" },
  { date: "2022-02-02" },
  { date: "2022-02-03" },
  { date: "2022-02-04" },
  { date: "2022-02-05" },
  { date: "2022-02-06" },
];
export default function Calender() {
  return (
    <>
      <div className="flex items-center justify-end gap-6 text-gray-900 px-5 ">
        <button
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 ring-1 ring-gray-200 rounded-full hover:bg-gray-100 focus:z-10"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon
            className="h-5 w-5"
            aria-hidden="true"
          />
        </button>
        <div className=" text-sm font-semibold">January</div>
        <button
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500  ring-1 ring-gray-200 rounded-full hover:bg-gray-100 focus:z-10"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon
            className="h-5 w-5"
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-7  text-xs leading-6 ">
        <div className="text-center font-bold">Mo</div>
        <div className="text-center  font-bold">Tu</div>
        <div className="text-center  font-bold">We</div>
        <div className="text-center  font-bold">Th</div>
        <div className="text-center  font-bold">Fri</div>
        <div className="text-center  font-bold">Sa</div>
        <div className="text-center  font-bold">Su</div>
      </div>
      <div className="isolate h-full mt-2 grid grid-cols-7 rounded-lg text-sm ">
        {days.map((day) => (
          <button
            key={day.date}
            type="button"
            className={classNames(
              " hover:bg-gray-100 focus:z-10 ",
              "bg-white",
              (day?.isSelected || day?.isToday) && "font-semibold",
              day.isSelected && "text-white",
              !day.isSelected &&
                day.isCurrentMonth &&
                !day.isToday &&
                "text-gray-900",
              !day.isSelected &&
                !day.isCurrentMonth &&
                !day.isToday &&
                "text-gray-400/60",
              day.isToday && !day.isSelected && " rounded-full"
            )}
          >
            <time
              dateTime={day.date}
              className={classNames(
                "mx-auto rounded-full ",
                day.isSelected && day.isToday && "bg-indigo-600",
                day.isSelected && !day.isToday && "bg-gray-900 p-1"
              )}
            >
              {day?.date?.split("-")?.pop()?.replace(/^0/, "")}
            </time>
          </button>
        ))}
      </div>
    </>
  );
}

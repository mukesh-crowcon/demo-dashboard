import React from "react";
import ListBoxComp from "./ListBoxComp";

export default function ChartWrapper({
  children,
  title,
  showMonthSelector = true,
}: {
  children: React.ReactNode;
  title: string;
  showMonthSelector?: boolean;
}) {
  return (
    <div className="relative  flex flex-col justify-between overflow-hidden rounded-2xl bg-white  p-4">
      <div className="flex flex-row justify-between">
        <p className="text-xl font-bold ">{title}</p>
        {showMonthSelector && (
          <div className="">
            <ListBoxComp />
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

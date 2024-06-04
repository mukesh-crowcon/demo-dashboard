import { useState } from "react";
import { classNames } from "./utils";

const tabData = [
  { name: "Event Logs", href: "", current: false },
  { name: "Gas Logs", href: "", current: false },
  { name: "Sync History", href: "", current: true },
  { name: "Service", href: "", current: false },
];

export default function Tabs() {
  const [tabs, setTabs] = useState(tabData);
  return (
    <div>
      <div className="sm:hidden">
        <label
          htmlFor="tabs"
          className="sr-only"
        >
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={tabs?.find((tab) => tab.current)?.name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav
            className=" relative flex"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <>
                <button
                  title={tab.name}
                  key={tab.name}
                  onClick={() =>
                    setTabs((preTabs) =>
                      preTabs.map((preTab) => ({
                        ...preTab,
                        current: preTab.name === tab.name,
                      }))
                    )
                  }
                  className={classNames(
                    tab.current
                      ? " text-indigo-600"
                      : "text-gray-500 hover:text-gray-700",
                    "whitespace-nowrap  pt-4  px-1 text-sm font-medium w-[120px] pb-4"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </button>
              </>
            ))}
            <div
              className={classNames(
                tabs.find((ele) => ele.current)?.name === "Event Logs"
                  ? ` translate-x-0 transform `
                  : "",
                tabs.find((ele) => ele.current)?.name === "Gas Logs"
                  ? ` translate-x-[100%]  transform`
                  : "",
                tabs.find((ele) => ele.current)?.name === "Sync History"
                  ? ` translate-x-[200%]  transform `
                  : "",
                tabs.find((ele) => ele.current)?.name === "Service"
                  ? ` translate-x-[300%]  transform `
                  : "",
                " bg-indigo-600",
                "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                `absolute top-11 w-[120px] whitespace-nowrap border-b-2 h-1 mt-1 rounded-tl-md rounded-tr-md mb-4 px-1 text-sm font-medium transition-transform duration-200  ease-in`
              )}
            />
          </nav>
        </div>
      </div>
    </div>
  );
}

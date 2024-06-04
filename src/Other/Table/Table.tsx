import "./Table.css";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
const TableOne = () => {
  const tableData = [
    {
      title: "Marketplace",
      platforms: ["apple", "android", "windows"],
      date: "12.Jan.2021",
      percentage: 75.5,
    },
    {
      title: "Venus DB PRO",
      platforms: ["apple"],
      date: "21.Feb.2021",
      percentage: 35.4,
    },
    {
      title: "Venus DS",
      platforms: ["apple", "android", "windows"],
      date: "13.Mar.2021",
      percentage: 25,
    },
    {
      title: "Venus 3D Asset",
      platforms: ["apple", "windows"],
      date: "24.Jan.2021",
      percentage: 100,
    },
    {
      title: "Uranus",
      platforms: ["android", "windows"],
      date: "21.Sep.2021",
      percentage: 12.2,
    },
    {
      title: "Uranus",
      platforms: ["android", "windows"],
      date: "21.Sep.2021",
      percentage: 12.2,
    },
    {
      title: "Uranus",
      platforms: ["android", "windows"],
      date: "21.Sep.2021",
      percentage: 12.2,
    },
    {
      title: "Uranus",
      platforms: ["android", "windows"],
      date: "21.Sep.2021",
      percentage: 12.2,
    },
    {
      title: "Uranus",
      platforms: ["android", "windows"],
      date: "21.Sep.2021",
      percentage: 12.2,
    },
    {
      title: "Uranus",
      platforms: ["android", "windows"],
      date: "21.Sep.2021",
      percentage: 12.2,
    },
    {
      title: "Uranus",
      platforms: ["android", "windows"],
      date: "21.Sep.2021",
      percentage: 12.2,
    },
  ];

  const platformIcons: {
    [key: string]: JSX.Element;
  } = {
    apple: <span className="platform-icon apple" />,
    android: <span className="platform-icon android" />,
    windows: <span className="platform-icon windows" />,
  };

  return (
    <div className="relative  overflow-hidden rounded-2xl bg-white  p-4 ">
      <div className="development-table w-full ">
        <div className="table-header border-gray-200 border-b-2">
          <div className="flex flex-row flex-1 gap-2 items-center font-bold text-sm text-gray-400">
            Title{" "}
            <span>
              <ArrowDownIcon className="h-4 w-4 " />
            </span>
          </div>
          <div className="flex flex-row flex-1 gap-2 items-center font-bold text-sm text-gray-400">
            Title{" "}
            <span>
              <ArrowDownIcon className="h-4 w-4 " />
            </span>
          </div>
          <div className="flex flex-row flex-1 gap-2 items-center font-bold text-sm text-gray-400">
            Title{" "}
            <span>
              <ArrowDownIcon className="h-4 w-4 " />
            </span>
          </div>
          <div className="flex flex-row flex-1 gap-2 items-center font-bold text-sm text-gray-400">
            Title{" "}
            <span>
              <ArrowDownIcon className="h-4 w-4 " />
            </span>
          </div>
        </div>
        {tableData.map((row, index) => (
          <div
            key={index}
            className="py-2 w-full flex "
          >
            <div className="table-cell font-bold text-sm text-gray-600">
              {row.title}
            </div>
            <div className="table-cell ">
              {row.platforms.map((platform) => platformIcons[platform])}
            </div>
            <div className="table-cell font-bold text-sm text-gray-600">
              {row.date}
            </div>
            <div className="flex-1 justify-end items-center text-left  gap-2 flex flex-row ">
              <p className="font-bold text-sm text-gray-600">
                {row.percentage}%
              </p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${row.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;

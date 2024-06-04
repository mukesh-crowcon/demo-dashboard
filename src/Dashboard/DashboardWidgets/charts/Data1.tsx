import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CloudArrowUpIcon,
  DevicePhoneMobileIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import data from "../../../Data/data.json";
import { classNames } from "../../../Commons/utils";

const stats = [
  {
    id: 1,
    name: "Total Operators",
    stat: data.operator.length,
    icon: UsersIcon,
    active: {
      change: data.operator.filter((op) => op.status === "Active").length,
      changeType: "increase",
    },
    inactive: {
      change: data.operator.filter((op) => op.status === "InActive").length,
      changeType: "decrease",
    },
    Tooltip: (
      <div className="gap-4">
        <div className="flex flex-row">
          <ArrowUpIcon
            className="h-5 w-5 flex-shrink-0 self-center text-green-500"
            aria-hidden="true"
          />
          <p className="text-xs text-slate-700 font-semibold">
            - Active Operators
          </p>
        </div>

        <div className="flex flex-row items-center">
          <ArrowDownIcon
            className="h-5 w-5 flex-shrink-0 self-center text-red-500"
            aria-hidden="true"
          />
          <p className="text-xs text-slate-700 font-semibold">
            - InActive Operators
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: "Total Devices",
    stat: data.fleetsummary.totalDevices,
    icon: DevicePhoneMobileIcon,
    active: {
      change: data.fleetsummary.totalActiveDevices,
      changeType: "increase",
    },
    inactive: {
      change: data.fleetsummary.totalInActiveDevices,
      changeType: "decrease",
    },
    Tooltip: (
      <div className="gap-4">
        <div className="flex flex-row">
          <ArrowUpIcon
            className="h-5 w-5 flex-shrink-0 self-center text-green-500"
            aria-hidden="true"
          />
          <p className="text-xs text-slate-700 font-semibold">
            - Active Devices
          </p>
        </div>

        <div className="flex flex-row items-center">
          <ArrowDownIcon
            className="h-5 w-5 flex-shrink-0 self-center text-red-500"
            aria-hidden="true"
          />
          <p className="text-xs text-slate-700 font-semibold">
            - In-Active Devices
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Avg. Sync Status",
    stat:
      (
        (data.fleetinsights.devicesSynced / data.fleetsummary.totalDevices) *
        100
      ).toFixed(2) + "%",
    icon: CloudArrowUpIcon,
    active: {
      change: data.fleetinsights.devicesSynced,
      changeType: "increase",
    },
    inactive: {
      change: data.fleetinsights.devicesNotSynced,
      changeType: "decrease",
    },
    Tooltip: (
      <div className="gap-4">
        <div className="flex flex-row">
          <ArrowUpIcon
            className="h-5 w-5 flex-shrink-0 self-center text-green-500"
            aria-hidden="true"
          />
          <p className="text-xs text-slate-700 font-semibold">- Sync Devices</p>
        </div>

        <div className="flex flex-row items-center">
          <ArrowDownIcon
            className="h-5 w-5 flex-shrink-0 self-center text-red-500"
            aria-hidden="true"
          />
          <p className="text-xs text-slate-700 font-semibold">
            - Not Sync Devices
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Alarm Rate",
    stat:
      (
        (data.fleetinsights.devicesWithAlarms /
          data.fleetsummary.totalDevices) *
        100
      ).toFixed(2) + "%",
    icon: ExclamationTriangleIcon,
    change: "3.2%",
    active: {
      change: data.fleetinsights.devicesWithAlarms,
      changeType: "increase",
    },
    inactive: {
      change:
        data.fleetsummary.totalDevices - data.fleetinsights.devicesWithAlarms,
      changeType: "decrease",
    },
    Tooltip: (
      <div className="gap-4">
        <div className="flex flex-row">
          <ArrowUpIcon
            className="h-5 w-5 flex-shrink-0 self-center text-green-500"
            aria-hidden="true"
          />
          <p className="text-xs text-slate-700 font-semibold">
            - Alarmed Devices
          </p>
        </div>

        <div className="flex flex-row items-center">
          <ArrowDownIcon
            className="h-5 w-5 flex-shrink-0 self-center text-red-500"
            aria-hidden="true"
          />
          <p className="text-xs text-slate-700 font-semibold">
            - Un Alarmed Devices
          </p>
        </div>
      </div>
    ),
  },
];

export default function DataOne() {
  return (
    <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
      {stats.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-2xl bg-white px-4 pb-12 pt-5  sm:px-6 sm:pt-6 flex flex-col justify-center"
        >
          <div className="absolute top-0 right-0 z-50 p-4">
            <Popover className="relative">
              <PopoverButton>
                <InformationCircleIcon className="text-black h-4 w-4" />
              </PopoverButton>
              <PopoverPanel
                anchor="right start"
                className="flex flex-col bg-white p-4 -lg rounded-2xl z-50 border border-gray-200/50"
              >
                {item.Tooltip}
              </PopoverPanel>
            </Popover>
          </div>
          <div>
            <div className="absolute rounded-md bg-indigo-500 p-3 lg:max-xl:hidden block">
              <item.icon
                className="h-6 w-6 text-white "
                aria-hidden="true"
              />
            </div>
            <p className="lg:max-xl:ml-0 ml-16 truncate text-sm font-medium text-gray-500">
              {item.name}
            </p>
          </div>
          <div className="lg:max-xl:ml-0 ml-16 flex lg:max-xl:flex-col  items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
            <div className="flex flex-row justify-between items-center lg:max-xl:gap-3 gap-0">
              <p
                className={classNames(
                  item.active.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600",
                  "lg:max-xl:ml-0 ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                {item.active.changeType === "increase" ? (
                  <ArrowUpIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {" "}
                  {item.active.changeType === "increase"
                    ? "Increased"
                    : "Decreased"}{" "}
                  by{" "}
                </span>
                {item.active.change}
              </p>
              <p
                className={classNames(
                  item.inactive.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600",
                  "lg:max-xl:ml-0 ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                {item.inactive.changeType === "increase" ? (
                  <ArrowUpIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {" "}
                  {item.inactive.changeType === "increase"
                    ? "Increased"
                    : "Decreased"}{" "}
                  by{" "}
                </span>
                {item.inactive.change}
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View all<span className="sr-only"> {item.name} stats</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

import {
  ResponsiveContainer,
  XAxis,
  Tooltip,
  AreaChart,
  Area,
  YAxis,
} from "recharts";
import ChartWrapper from "../../../Commons/ChartWrapper";

type DeviceWithFaultsProps = {
  data: any;
};

export default function DeviceWithFaults({ data }: DeviceWithFaultsProps) {
  const sortedData = [...data.faults].reverse();
  const unSortedData = data.faults;

  return (
    <ChartWrapper title="Device with faults">
      <div className=" flex flex-row">
        <div className="xl:flex hidden p-3 h-fit drop-shadow-lg rounded-xl bg-white">
          <p className="text-4xl font-bold text-indigo-500 leading-4 mt-2">
            {unSortedData[0].faults}
            <span className="text-sm text-gray-500 font-normal">faults</span>
          </p>
          <div className="mt-2">
            {unSortedData[0].faults > unSortedData[1].faults ? (
              <div className="flex flex-row gap-1  items-center">
                <ArrowUpIcon className="w-4 h-4 text-red-700" />
                <span className="text-red-700 font-bold">
                  {Math.abs(
                    (unSortedData[0].faults / data.totalDevices) * 100 -
                      (unSortedData[1].faults / data.totalDevices) * 100
                  ).toFixed(2)}{" "}
                  %
                </span>
              </div>
            ) : (
              <div className="flex flex-row">
                <ArrowDownIcon className="w-5 h-5 text-green-700" />
                <span className="text-green-700 text-bold">
                  {Math.abs(
                    (unSortedData[0].faults / data.totalDevices) * 100 -
                      (unSortedData[1].faults / data.totalDevices) * 100
                  ).toFixed(2)}
                  %
                </span>
              </div>
            )}
          </div>
        </div>
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <AreaChart data={sortedData}>
            <defs>
              <linearGradient
                id="colorUv"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#8884d8"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#8884d8"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              fontStyle={"bold"}
            />
            <YAxis
              tickMargin={10}
              fontSize={12}
              fontStyle={"bold"}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="faults"
              stroke="#8884d8"
              fillOpacity={1}
              strokeWidth={4}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

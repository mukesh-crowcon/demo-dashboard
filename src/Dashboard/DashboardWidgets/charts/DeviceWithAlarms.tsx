/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  YAxis,
} from "recharts";
import ChartWrapper from "../../../Commons/ChartWrapper";
import { CustomLegends } from "../../../Commons/Legends";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

type DeviceWithAlarmsProps = {
  data: any;
};

export default function DeviceWithAlarms({ data }: DeviceWithAlarmsProps) {
  const sortedData = [...data.alarms].reverse();
  const unSortedData = data.alarms;
  return (
    <ChartWrapper title="Devices with Alarms">
      <div className=" flex flex-row">
        <div className="flex flex-col gap-y-2 ">
          <div className="xl:visible invisible p-3 h-fit drop-shadow-lg rounded-2xl bg-white">
            <p className="text-4xl font-bold text-indigo-500 leading-4 mt-2">
              {unSortedData[0].alarm1}
              <span className="text-sm text-gray-500 font-normal">Alarm1</span>
            </p>
            <div className="mt-2">
              {unSortedData[0].alarm1 > unSortedData[1].alarm1 ? (
                <div className="flex flex-row gap-1  items-center">
                  <ArrowUpIcon className="w-4 h-4 text-red-700" />
                  <span className="text-red-700 font-bold">
                    {Math.abs(
                      (unSortedData[0].alarm1 / data.totalDevices) * 100 -
                        (unSortedData[1].alarm1 / data.totalDevices) * 100
                    ).toFixed(2)}{" "}
                    %
                  </span>
                </div>
              ) : (
                <div className="flex flex-row">
                  <ArrowDownIcon className="w-5 h-5 text-green-700" />
                  <span className="text-green-700 text-bold">
                    {Math.abs(
                      (unSortedData[0].alarm1 / data.totalDevices) * 100 -
                        (unSortedData[1].alarm1 / data.totalDevices) * 100
                    ).toFixed(2)}
                    %
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="xl:visible invisible p-3 h-fit drop-shadow-lg rounded-2xl bg-white">
            <p className="text-4xl font-bold text-indigo-500 leading-4 mt-2">
              {unSortedData[0].alarm2}
              <span className="text-sm text-gray-500 font-normal">Alarm2</span>
            </p>
            <div className="mt-2">
              {unSortedData[0].alarm2 > unSortedData[1].alarm2 ? (
                <div className="flex flex-row gap-1  items-center">
                  <ArrowUpIcon className="w-4 h-4 text-red-700" />
                  <span className="text-red-700 font-bold">
                    {Math.abs(
                      (unSortedData[0].alarm2 / data.totalDevices) * 100 -
                        (unSortedData[1].alarm2 / data.totalDevices) * 100
                    ).toFixed(2)}{" "}
                    %
                  </span>
                </div>
              ) : (
                <div className="flex flex-row">
                  <ArrowDownIcon className="w-5 h-5 text-green-700" />
                  <span className="text-green-700 text-bold">
                    {Math.abs(
                      (unSortedData[0].alarm2 / data.totalDevices) * 100 -
                        (unSortedData[1].alarm2 / data.totalDevices) * 100
                    ).toFixed(2)}
                    %
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart data={sortedData}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              padding={{ left: 0, right: 0 }}
              fontSize={12}
              fontStyle={"bold"}
            />
            <YAxis
              fontSize={12}
              fontStyle={"bold"}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip />
            <Legend content={CustomLegends} />
            <Bar
              dataKey="alarm1"
              fill="#8884d8"
              legendType="circle"
              radius={[100, 100, 0, 0]}
              name="Alarm 1"
              barSize={10}
            />
            <Bar
              radius={[100, 100, 0, 0]}
              dataKey="alarm2"
              fill="red"
              name="Alarm 2"
              barSize={10}
              legendType="circle"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

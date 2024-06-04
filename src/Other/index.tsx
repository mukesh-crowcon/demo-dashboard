/* eslint-disable @typescript-eslint/no-explicit-any */
import TableHeader from "./Table/TableHeader";
import BreadCrumb from "../Commons/BreadCrumb";
import ChartWrapper from "../Commons/ChartWrapper";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { PieChartComp } from "../Commons/PieChartComp";
import data from "../Data/deviceStats.json";
import { data as data2 } from "../Data/deviceList.json";
import TableThree from "./Table/TableThree";
import { FunnelIcon } from "@heroicons/react/24/outline";
import DueList from "./DueList";

const months: {
  [key: string]: string;
} = {
  "00": "Jan",
  "01": "Feb",
  "02": "Mar",
  "03": "Apr",
  "04": "May",
  "05": "Jun",
  "06": "Jul",
  "07": "Aug",
  "08": "Sep",
  "09": "Oct",
  "10": "Nov",
  "11": "Dec",
};

export default function Other() {
  // const p = data.reduce(
  //   (acc: any, device: any) => ({
  //     ...acc,
  //     [device.lastSwitchOnDate.split("T")[0]]: [
  //       ...(acc[device.lastSwitchOnDate.split("T")[0]] ?? []),
  //       device,
  //     ],
  //   }),
  //   {}
  // );
  const switchOn = data.reduce(
    (acc: any, device: any) => ({
      ...acc,
      [device.lastSwitchOnDate.split("T")[0].split("-")[0]]: {
        ...(acc?.[device.lastSwitchOnDate.split("T")[0].split("-")[0]] ?? {}),
        [device.lastSwitchOnDate.split("T")[0].split("-")[1]]: [
          ...(acc[device.lastSwitchOnDate.split("T")[0].split("-")[0]]?.[
            device.lastSwitchOnDate.split("T")[0].split("-")[1]
          ] ?? []),
          device,
        ],
      },
    }),
    {}
  );

  const syncData = data.reduce(
    (acc: any, device: any) => ({
      ...acc,
      [device.lastUploadDate.split("T")[0].split("-")[0]]: {
        ...(acc?.[device.lastUploadDate.split("T")[0].split("-")[0]] ?? {}),
        [device.lastUploadDate.split("T")[0].split("-")[1]]: [
          ...(acc[device.lastUploadDate.split("T")[0].split("-")[0]]?.[
            device.lastUploadDate.split("T")[0].split("-")[1]
          ] ?? []),
          device,
        ],
      },
    }),
    {}
  );

  return (
    <div className="grid gap-4">
      <BreadCrumb activePage="Teams" />

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2  gap-4 ">
        <div className="grid grid-cols-3 gap-4 md:max-xl:col-span-2">
          <div className="relative  flex flex-col justify-between overflow-hidden rounded-2xl bg-white  p-4">
            <p className="truncate text-sm font-medium text-gray-500">
              Bumped Devices
            </p>
            <div className="text-2xl font-semibold text-gray-900">
              {data.filter(
                (device) =>
                  device?.lastBumpTestInfo?.status === "BumpTestFailed"
              ).length +
                data.filter(
                  (device) =>
                    device?.lastBumpTestInfo?.status === "BumpTestPassed"
                ).length}
              <span className="font-bold text-slate-400 text-sm">
                / {data2.length}
              </span>
            </div>
          </div>
          <div className="relative  flex flex-col justify-between overflow-hidden rounded-2xl bg-white  p-4">
            <p className="truncate text-sm font-medium text-gray-500">
              Calibrated Devices
            </p>
            <div className="text-2xl font-semibold text-gray-900">
              {data2.filter((device) => device.lastCalibratedDate).length}
              <span className="font-bold text-slate-400 text-sm">
                / {data2.length}
              </span>
            </div>
          </div>
          <div className="relative  flex flex-col justify-between overflow-hidden rounded-2xl bg-white  p-4">
            <p className="truncate text-sm font-medium text-gray-500">T4</p>
            <div className="text-2xl font-semibold text-gray-900">
              {data2.filter((device) => device.deviceType === "T4").length}
              <span className="font-bold text-slate-400 text-sm">
                / {data2.length}
              </span>
            </div>
          </div>
          <div className="relative  flex flex-col justify-between overflow-hidden rounded-2xl bg-white  p-4">
            <p className="truncate text-sm font-medium text-gray-500">T3</p>
            <div className="text-2xl font-semibold text-gray-900">
              {data2.filter((device) => device.deviceType === "T3").length}
              <span className="font-bold text-slate-400 text-sm">
                / {data2.length}
              </span>
            </div>
          </div>
          <div className="relative  flex flex-col justify-between overflow-hidden rounded-2xl bg-white  p-4">
            <p className="truncate text-sm font-medium text-gray-500">
              {" "}
              Gas Pro
            </p>
            <div className="text-2xl font-semibold text-gray-900">
              {data2.filter((device) => device.deviceType === "GasPro").length}
              <span className="font-bold text-slate-400 text-sm">
                / {data2.length}
              </span>
            </div>
          </div>
          <div className="relative  flex flex-col justify-between overflow-hidden rounded-2xl bg-white  p-4">
            <p className="truncate text-sm font-medium text-gray-500">
              {" "}
              Gas Man
            </p>
            <div className="text-2xl font-semibold text-gray-900">
              {data2.filter((device) => device.deviceType === "Gasman").length}
              <span className="font-bold text-slate-400 text-sm">
                / {data2.length}
              </span>
            </div>
          </div>
        </div>
        {/* <DueList />
        <DueList /> */}
        <DueList />
      </div>
      <div className="grid grid-col-1  xl:grid-cols-3 gap-4 ">
        <ChartWrapper
          title="Bump Info"
          showMonthSelector={false}
        >
          <div id="due-container">
            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <PieChartComp
                containerId={"due-container"}
                data={[
                  {
                    name: "No Bumped",
                    value: data.filter((device) => !device.lastBumpTestInfo)
                      .length,
                  },
                  {
                    name: "Failed Bump",
                    value: data.filter(
                      (device) =>
                        device?.lastBumpTestInfo?.status === "BumpTestFailed"
                    ).length,
                  },
                  {
                    name: "Passed Bump",
                    value: data.filter(
                      (device) =>
                        device?.lastBumpTestInfo?.status === "BumpTestPassed"
                    ).length,
                  },
                ]}
              />
            </ResponsiveContainer>
          </div>
        </ChartWrapper>
        <ChartWrapper title="Active Device">
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart
              data={Object.entries(switchOn[new Date().getFullYear()])
                .map(([key, value]: any) => ({
                  key: key,
                  value: value?.length ?? 0,
                }))
                .reverse()}
            >
              <CartesianGrid
                strokeDasharray="2 3 "
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey={(props) => {
                  const key = `${+props?.key - 1}`.padStart(2, "0");
                  return months?.[key];
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />
              <Legend
                wrapperStyle={{ paddingBottom: 20 }}
                verticalAlign="top"
                align="right"
              />
              <Bar
                dataKey="value"
                fill="#8884d8"
                legendType="circle"
                radius={[100, 100, 0, 0]}
                name="Switch on count"
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartWrapper>

        <ChartWrapper title="Device Activity">
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <AreaChart
              data={Object.entries(syncData[new Date().getFullYear()])
                .map(([key, value]: any) => ({
                  key: key,
                  value: value?.length ?? 0,
                }))
                .sort((a, b) => b.key - a.key)
                .reverse()}
            >
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
                dataKey={(props) => {
                  return months[`${+props?.key - 1}`.padStart(2, "0")];
                }}
                axisLine={false}
                tickLine={false}
                padding={{ left: 10, right: 10 }}
              />

              <Tooltip />
              <Legend
                wrapperStyle={{ paddingBottom: 20 }}
                verticalAlign="top"
                align="right"
              />
              <Area
                type="monotone"
                name="Sync Status"
                dataKey="value"
                stroke="#8884d8"
                fillOpacity={1}
                strokeWidth={4}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </div>
      <div className="flex flex-col md:flex-row gap-y-4 gap-x-2 justify-between xl:items-center ">
        <div className="h-[61px] text-gray-500 bg-white max-w-full w-full md:max-w-[calc(100vw-70%)] md:w-fit grid grid-cols-9 md:grid-cols-6 gap-x-2 p-3 pr-6 justify-start items-center  rounded-full">
          <div className="bg-blue-700 p-2 rounded-full">
            <FunnelIcon className="w-6 h-6 text-white" />
          </div>
          <div className="col-span-8 md:col-span-4">
            <div className="text-left text-sm ">Filter Summary : </div>
            <div className="text-xs pt-1 font-bold truncate ">
              Date `14-Jan - 20-Jan`, Card: 1234****
            </div>
          </div>
        </div>
        <TableHeader />
      </div>
      <TableThree />
    </div>
  );
}

import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  BarChart,
  Bar,
} from "recharts";
import Calender from "../Commons/Calender";
import ChartWrapper from "../Commons/ChartWrapper";
import { PieChartComp } from "../Commons/PieChartComp";
import ClientDevices from "./DashboardWidgets/charts/ClientDevices";
import DeviceWithAlarms from "./DashboardWidgets/charts/DeviceWithAlarms";
import DeviceWithFaults from "./DashboardWidgets/charts/DeviceWithFaults";
import data from "../Data/data.json";
import DataOne from "./DashboardWidgets/charts/Data1";

const { fleetinsights, fleetsummary } = data;
export default function Dashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1">
        <ClientDevices />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <DeviceWithFaults data={fleetinsights} />
        <DeviceWithAlarms data={fleetinsights} />

        <ChartWrapper title="Device Activity">
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={fleetinsights.switchOns}>
              <CartesianGrid
                strokeDasharray="1 3 "
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                padding={{ left: 30, right: 0 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Legend
                wrapperStyle={{ paddingBottom: 20 }}
                verticalAlign="top"
                align="right"
              />
              <Line
                legendType="circle"
                name="Switch Ons"
                type="monotone"
                dataKey="switchOns"
                stroke="red"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartWrapper>
        <DataOne />

        <ChartWrapper title="Device Demo">
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={fleetinsights.alarms}>
              <CartesianGrid
                strokeDasharray="1 3 "
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                padding={{ left: 30, right: 0 }}
              />

              <Tooltip />
              <Legend
                wrapperStyle={{ paddingBottom: 20 }}
                verticalAlign="top"
                align="right"
              />
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
        </ChartWrapper>

        <ChartWrapper title="Device Assignment">
          <div id="pi-container">
            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <PieChartComp
                data={[
                  {
                    name: "Assigned",
                    value: fleetsummary.fleetAssignment.deviceAssignments,
                  },
                  {
                    name: "Un Assigned",
                    value: fleetsummary.fleetAssignment.deviceUnAssignments,
                  },
                ]}
              />
            </ResponsiveContainer>
          </div>
        </ChartWrapper>
        <ChartWrapper
          title="Calibration Calender"
          showMonthSelector={false}
        >
          <Calender />
        </ChartWrapper>

        <ChartWrapper title={"Upcoming Overdue"}>
          <div id="due-container">
            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <PieChartComp
                containerId={"due-container"}
                data={[
                  {
                    name: "Thirty Days",
                    value: fleetsummary.upcomingCalibrations.thirtyDaysDue,
                  },
                  {
                    name: "Sixty Days",
                    value: fleetsummary.upcomingCalibrations.sixtyDaysDue,
                  },
                  {
                    name: "Ninety Days",
                    value: fleetsummary.upcomingCalibrations.ninetyDaysDue,
                  },
                ]}
              />
            </ResponsiveContainer>
          </div>
        </ChartWrapper>
      </div>
    </div>
  );
}

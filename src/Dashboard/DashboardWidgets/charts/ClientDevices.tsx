import data from "../../../Data/data.json";

const overDueData = data.fleetsummary.devicesOverDue;

export default function ClientDevices() {
  return (
    <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4  gap-6">
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white ">
        <div className="flex-row flex justify-between items-center  px-4 pb-5 pt-5   sm:px-6 sm:pt-6">
          <div className="">
            <p className="truncate text-sm font-medium text-gray-500">
              T3 OverDue
            </p>
            <p className="gap-1 flex items-baseline mt-1">
              <span className="text-2xl font-semibold text-gray-900">
                {overDueData.t3OverDue}
              </span>
              <span className="text-slate-400 text-sm">/</span>
              <span className="font-bold text-slate-400 text-sm">
                {data.fleetsummary.totalDevices}
              </span>
            </p>
          </div>
          <div className="bg-blue-500/70 rounded-md">
            <div className="p-4 text-white font-extrabold">T3</div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white ">
        <div className="flex-row flex justify-between items-center  px-4 pb-5 pt-5   sm:px-6 sm:pt-6">
          <div className="">
            <p className="truncate text-sm font-medium text-gray-500">
              T4 OverDue
            </p>
            <p className="gap-1 flex items-baseline mt-1">
              <span className="text-2xl font-semibold text-gray-900">
                {overDueData.t4OverDue}
              </span>
              <span className="text-slate-400 text-sm">/</span>
              <span className="font-bold text-slate-400 text-sm">
                {data.fleetsummary.totalDevices}
              </span>
            </p>
          </div>
          <div className="bg-orange-500/70 rounded-md">
            <div className="p-4 text-white font-extrabold">T4</div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white ">
        <div className="flex-row flex justify-between items-center  px-4 pb-5 pt-5   sm:px-6 sm:pt-6">
          <div className="">
            <p className="truncate text-sm font-medium text-gray-500">
              Gasman OverDue
            </p>
            <p className="gap-1 flex items-baseline mt-1">
              <span className="text-2xl font-semibold text-gray-900">
                {overDueData.gasmanOverDue}
              </span>
              <span className="text-slate-400 text-sm">/</span>
              <span className="font-bold text-slate-400 text-sm">
                {data.fleetsummary.totalDevices}
              </span>
            </p>
          </div>
          <div className="bg-red-500/70 rounded-md">
            <div className="p-4 text-white font-extrabold">GM</div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white ">
        <div className="flex-row flex justify-between items-center  px-4 pb-5 pt-5   sm:px-6 sm:pt-6">
          <div className="">
            <p className="truncate text-sm font-medium text-gray-500">
              GasPro OverDue
            </p>
            <p className="gap-1 flex items-baseline mt-1">
              <span className="text-2xl font-semibold text-gray-900">
                {overDueData.gasProOverDue}
              </span>
              <span className="text-slate-400 text-sm">/</span>
              <span className="font-bold text-slate-400 text-sm">
                {data.fleetsummary.totalDevices}
              </span>
            </p>
          </div>
          <div className="bg-green-500/70 rounded-md">
            <div className="p-4 text-white font-extrabold">GP</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const CustomLegends = (props: any) => {
  const { payload } = props;

  return (
    <div className="hidden md:block ">
      <div className="divide-x-2 flex-row m-auto hidden md:flex justify-center  py-3  w-full drop-shadow-lg rounded-2xl bg-white">
        {payload.map((item: any) => (
          <div
            className=" w-full flex flex-col justify-center "
            key={item.payload.name}
          >
            <div className="flex justify-center items-center gap-2">
              <div
                style={{ background: item.color }}
                className="h-2 w-2 rounded-full"
              />
              <div className="truncate text-xs font-medium text-center text-gray-500">
                {item.payload.name}
              </div>
            </div>

            <div className="text-2xl text-center font-semibold text-gray-900">
              {item.payload.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

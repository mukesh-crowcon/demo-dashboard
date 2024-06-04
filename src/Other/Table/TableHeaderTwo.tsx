export default function HeaderTwo() {
  return (
    <div className="gap-2 lg:gap-4  flex flex-row justify-between items-center py-3 md:py-4 ">
      <div className="flex flex-grow ">
        <div className="flex items-center justify-start w-full md:w-80 z-0">
          <label className="relative w-full group/search-input">
            <input
              type="text"
              placeholder="Search"
              className="  inline-flex pl-4 rounded-4xl placeholder-c-dark-blue-1  px-3 h-52 font-normal outline-0 w-full border-3 border-c-light-blue-4 hover:border-c-dark-blue-1 focus:border-c-blue active:bg-c-blue active:placeholder-c-white"
              value=""
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <div className="">
                <svg
                  className="fill-transparent stroke-black group-active/search-input:stroke-white group-focus/search-input:stroke-white"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 14L17 17"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="5.5"
                    stroke-width="2"
                  ></circle>
                </svg>
              </div>
            </span>
          </label>
        </div>
        <div className="ml-2 flex items-center justify-start">
          <div>
            <div
              style={{
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                borderWidth: 0,
                display: "none",
              }}
            ></div>
            <button
              type="button"
              className="bg-c-dark-blue-1 outline-0 hover:bg-c-dark-blue-2  active:bg-c-dark-blue-3 text-c-white flex flex-row justify-around items-center rounded-full md:rounded-4xl w-10 md:w-auto h-10 md:h-52 "
            >
              <span className="hidden md:inline ml-5 font-bold text-base leading-5 ">
                Add Device
              </span>
              <span className="md:mr-4 md:ml-3">
                <div className="">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5V15"
                      stroke="#FFFFFF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M15 10L5 10"
                      stroke="#FFFFFF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 lg:gap-4">
        <div className=" relative">
          <div className="">
            <button
              type="button"
              className="bg-c-dark-blue-1 outline-0 hover:bg-c-dark-blue-2  active:bg-c-dark-blue-3 text-c-white p-[10px]  rounded-full "
              title="Notification"
            >
              <div>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M13.5 7.7998L9 12.2998L4.5 7.7998"
                    stroke="#FFFFFF"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="rotate-180 translate-x-[100%] translate-y-[75%]"
                  ></path>
                  <path
                    d="M9 1.7998V11.6998"
                    stroke="#FFFFFF"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M2 11V14.6C2 15.0971 2.40294 16.0768 2.9 16.0768H15.5C15.9971 16.0768 16.4 15.0971 16.4 14.6V11"
                    stroke="#FFFFFF"
                    stroke-width="1.35"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className=" relative">
          <div className="">
            <button
              title="notification"
              type="button"
              className="bg-c-dark-blue-1 outline-0 hover:bg-c-dark-blue-2  active:bg-c-dark-blue-3 text-c-white p-[10px]  rounded-full"
            >
              <div className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.125 1.78711H1.875L9.175 10.8989V17.1982L12.825 19.1246V10.8989L20.125 1.78711Z"
                    stroke="#FFFFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div
          className="relative float-right"
          data-headlessui-state=""
        >
          <button
            title="name"
            className="p-3 bg-c-dark-blue-1 rounded-full text-white flex items-center outline-0 hover:bg-c-dark-blue-2 active:bg-c-dark-blue-3"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
            id="headlessui-popover-button-:r3:"
          >
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 22 24"
                fill="none"
              >
                <path
                  d="M8.99999 24L13 24V13.5V0H8.99999V24ZM0 24L3.99999 24V0H0V24ZM18 0V13.3391V24L22 24V12.1122V0H18Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div
          style={{
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0px, 0px, 0px, 0px)",
            whiteSpace: "nowrap",
            borderWidth: 0,
            display: "none",
          }}
        ></div>
      </div>
    </div>
  );
}

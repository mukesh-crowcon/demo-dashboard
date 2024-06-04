import { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Dashboard from "../Dashboard";
import Other from "../Other";

function renderContent(active: string) {
  switch (active) {
    case "dashboard":
      return <Dashboard />;
    default:
      return <Other />;
  }
}

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const active = window.location.pathname.split("/:")[1];

  return (
    <>
      <div>
        <SideBar
          isSidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="lg:pl-72">
          <Header
            isSidebarOpen={sidebarOpen}
            openSidebar={() => setSidebarOpen((pre) => !pre)}
          />

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{renderContent(active)}</div>
          </main>
        </div>
      </div>
    </>
  );
}

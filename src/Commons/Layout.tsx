import { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Dashboard from "../Dashboard";
import Other from "../Other";

function renderContent(active: string) {
  switch (active) {
    case "Dashboard":
      return <Dashboard />;
    default:
      return <Other />;
  }
}

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <>
      <div>
        <SideBar
          isSidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activePage={activePage}
          setActivePage={(page) => setActivePage(page)}
        />
        <div className="lg:pl-[200px]">
          <Header
            isSidebarOpen={sidebarOpen}
            openSidebar={() => setSidebarOpen((pre) => !pre)}
          />

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              {renderContent(activePage)}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

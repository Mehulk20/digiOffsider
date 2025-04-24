import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div>
        <main className="h-full bg-[#19191e] text-white py-6">
          <section className=" mx-auto max-w-6xl px-3 font-fontPrimary text-sm text-slate-300">
            <Outlet />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;

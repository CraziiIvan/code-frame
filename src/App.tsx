import { Suspense, lazy } from "react";
import ContextProvider from "./components/ContextProvider";
import Loading from "./components/Loading";
import { ArrowUpRight } from "@phosphor-icons/react";

const SideBar = lazy(() => import("./layout/SideBar"));
const NavBar = lazy(() => import("./layout/NavBar"));
const Canvas = lazy(() => import("./layout/Canvas"));

function App() {
  return (
    <main className=" w-screen h-screen bg-neutral-200 dark:bg-neutral-900 font-primary">
      <Suspense fallback={<Loading />}>
        <ContextProvider>
          <NavBar />
          <div className=" flex h-body">
            <Canvas />
            <SideBar />
          </div>
        </ContextProvider>
      </Suspense>
      <a className="absolute bottom-3 left-3 text-sm text-neutral-500 dark:text-neutral-600 cursor-pointer">
        Github Repo <ArrowUpRight className="inline" />
      </a>
    </main>
  );
}

export default App;

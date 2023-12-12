import { Suspense, lazy, useEffect, useState } from "react";
import ContextProvider from "./components/ContextProvider";
import Loading from "./components/Loading";
import { ArrowUpRight, WarningCircle } from "@phosphor-icons/react";

const SideBar = lazy(() => import("./layout/SideBar"));
const NavBar = lazy(() => import("./layout/NavBar"));
const Canvas = lazy(() => import("./layout/Canvas"));

function App() {
  const [view, setView] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", setWidthToView);
  });

  function setWidthToView() {
    setView(window.innerWidth);
  }

  return (
    <main className=" w-screen h-screen bg-neutral-200 dark:bg-neutral-900 font-primary">
      {view < 1200 ? (
        <div className=" h-full flex flex-col gap-y-5 items-center justify-center">
          <WarningCircle className="text-neutral-300 dark:text-neutral-800" size={80}/>
          <h5 className=" px-5 text-sm text-center text-neutral-400 dark:text-neutral-600">This site is optimized for a minimum width of 1200 pixels or higher.<br/> Please ensure that your screen size meets this requirement for an optimal browsing experience.</h5>
        </div>
      ) : (
        <Suspense fallback={<Loading />}>
          <ContextProvider>
            <NavBar />
            <div className=" flex h-body">
              <Canvas />
              <SideBar />
            </div>
          </ContextProvider>
          <a
            href="https://github.com/CraziiIvan/code-frame"
            target="_blank"
            className="absolute bottom-3 left-3 text-sm text-neutral-500 dark:text-neutral-600 cursor-pointer"
          >
            Github Repo <ArrowUpRight className="inline" />
          </a>
        </Suspense>
      )}
    </main>
  );
}

export default App;

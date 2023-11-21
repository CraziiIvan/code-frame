import Canvas from "./layout/Canvas"
import NavBar from "./layout/NavBar"
import SideBar from "./layout/SideBar"

function App() {
  return (
    <main className=" w-screen h-screen bg-neutral-200 font-primary">
      <NavBar/>
      <div className=" flex">
        <Canvas/>
        <SideBar/>
      </div>
    </main>
  )
}

export default App
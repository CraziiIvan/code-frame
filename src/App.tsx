import Canvas from "./layout/Canvas"
import NavBar from "./layout/NavBar"
import SideBar from "./layout/SideBar"

function App() {
  return (
    <main className=" w-screen h-screen bg-neutral-200 font-primary">
      <link rel="stylesheet" href="../node_modules/highlight.js/styles/atom-one-dark.css"></link>
      <NavBar/>
      <div className=" flex h-body">
        <Canvas/>
        <SideBar/>
      </div>
    </main>
  )
}

export default App
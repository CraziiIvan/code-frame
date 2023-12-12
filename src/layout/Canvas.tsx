import Editor from "../components/EditorPlayground";
import { useOptionsContext } from "../hooks/useOptionsContext";

function Canvas() {

  
  const context = useOptionsContext()
  const {darkMode} = context.state

  return(
    <section  className=" w-canvas h-full relative overflow-y-auto  ">
    <link rel="stylesheet" href={`../node_modules/highlight.js/styles/github${darkMode ? "-dark": ""}.css`}></link>
      <Editor/>
    </section>
  );
}

export default Canvas
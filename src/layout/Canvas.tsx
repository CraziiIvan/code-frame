import Editor from "../components/EditorPlayground";

function Canvas() {

  return(
    <section  className=" w-canvas h-full relative overflow-y-auto canvas-scroll">
      <Editor/>
    </section>
  );
}

export default Canvas
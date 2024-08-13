import "./App.css";
import Markdown from "react-markdown";
import { useState } from "react";
import markdown from "./Components/markdown";

function App() {
  const [editor, seteditor] = useState(markdown);

  const handlechange = (e: any) => {
    seteditor(e.target.value);
  };

  return (
    <>
      <div className="Wrapper_tex_ar ">
        <textarea
          name="editor"
          id="editor"
          defaultValue={editor}
          onChange={handlechange}
          className="  w-3/5 pt-2 pb-56 px-1  "
        ></textarea>
      </div>
      <div className=" flex  justify-center">
        <div
          id="Preview "
          className="text-left  border-solid border-2 w-2/3 p-5	"
        >
          <Markdown>{editor}</Markdown>
        </div>
      </div>
    </>
  );
}

export default App;

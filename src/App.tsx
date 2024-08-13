import "./App.css";
import Markdown from "react-markdown";
import { useState } from "react";
import markdown from "./Components/markdown";

function App() {
  const [editor, seteditor] = useState(markdown);

  const handlechange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    seteditor(target.value);
  };

  return (
    <>
      <div className="Wrapper_tex_ar  ">
        <textarea
          name="editor"
          id="editor"
          defaultValue={editor}
          onChange={handlechange}
        ></textarea>
      </div>
      <div id="Preview">
        <Markdown>{markdown}</Markdown>
      </div>
    </>
  );
}

export default App;

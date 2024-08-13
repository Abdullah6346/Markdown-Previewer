import "./App.css";
import Markdown from "react-markdown";
import { useState } from "react";
function App() {
  const [editor, seteditor] = useState("");
  const handlechange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    seteditor(target.value);
  };
  const markdown = `# Hi, *Pluto*!`;
  return (
    <>
      <div className="Wrapper_tex_ar  ">
        <textarea name="editor" id="editor" onChange={handlechange}></textarea>
      </div>
      <div id="Preview">
        <Markdown>{markdown}</Markdown>
      </div>
    </>
  );
}

export default App;

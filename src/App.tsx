import "./App.css";
import { useState } from "react";
function App() {
  const [editor, seteditor] = useState("");
  const handlechange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    seteditor(target.value);
  };
  return (
    <>
      <div onChange={handlechange} className="Wrapper_tex_ar  ">
        <textarea name="editor" id="editor"></textarea>
      </div>
      <div id="Preview">{editor}</div>
    </>
  );
}
// khg?

export default App;

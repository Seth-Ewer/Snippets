import React from "React";
import ReactDOM from "ReactDOM/client";
import { useState } from "React";
import { marked } from "marked";

marked.use({
  breaks: true
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function App(){
  var startingtext = "# header 1";
  startingtext = startingtext.concat("\n", "## header 2");
  startingtext = startingtext.concat("\n", "[link](https://codepen.io/laiko_01/pen/BagaBrw?editors=0010)");
  startingtext = startingtext.concat("\n", "not code `code` not code");
  startingtext = startingtext.concat("\n", "```\ndefinitely code\ndefinitely code\ndefinitely code\n```");
  startingtext = startingtext.concat("\n", "List!!!\n1. item\n2. item\n3. item");
  startingtext = startingtext.concat("\n", "> beep");
  startingtext = startingtext.concat("\n", "**BOLD**");
  startingtext = startingtext.concat("\n", "![image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)");
  const [currentText, setCurrentText] = useState(startingtext);
  
  return(
    <div>
      <Editor currentText={currentText} setCurrentText={setCurrentText}/>
      <Preview currentText={currentText}/>
    </div>
  );
}

function Editor(props){
  return(
    <div>
      <div className="BasicHeader">Editor</div>
      <textarea id="editor" className="BasicTextBox" value={props.currentText} onChange={e => props.setCurrentText(e.target.value)}></textarea>
    </div>
  );
}

function Preview(props){
  const parse = () => {
    return(
      marked.parse(props.currentText)
    );
  }
  return(
    <div>
      <div className="BasicHeader">Preview</div>
      <div id="preview" className="BasicTextBox" dangerouslySetInnerHTML={{__html:parse()}}></div>
    </div>
  );
  
}
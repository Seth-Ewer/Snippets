import React from "react";
import { useState } from "react";
import { marked } from 'marked'
import TestImage from '../TestImage.png';

marked.use({
  breaks: true
});

function MarkdownParsing(){
  var startingtext = "# header 1";
  startingtext = startingtext.concat("\n", "## header 2");
  startingtext = startingtext.concat("\n", "[link](https://github.com/Seth-Ewer)");
  startingtext = startingtext.concat("\n", "not code `code` not code");
  startingtext = startingtext.concat("\n", "```\ndefinitely code\ndefinitely code\ndefinitely code\n```");
  startingtext = startingtext.concat("\n", "List!!!\n1. item\n2. item\n3. item");
  startingtext = startingtext.concat("\n", "> beep");
  startingtext = startingtext.concat("\n", "**BOLD**");
  startingtext = startingtext.concat("\n", `![image](${TestImage})`);
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

export default MarkdownParsing;
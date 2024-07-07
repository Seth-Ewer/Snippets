import { useState } from 'react';
import './App.css';
import MarkdownParsing from './markdownparsing/MarkdownParsing';
import RandomQuoteMachine from './randomquotemachine/RandomQuoteMachine';

function App() {
  const availableSnippets = [{
    name: 'RandomQuoteMachine',
    component: <RandomQuoteMachine/>
  },{
    name: 'MarkdownParsing',
    component: <MarkdownParsing/>
  }];

  const [currentSnippet, setCurrentSnippet] = useState({
    name: "",
    component: <div/>
  });

 return (
   <div className="App">
      <header>
        {availableSnippets.map(x => <button onClick={()=> setCurrentSnippet(x)}>{x.name}</button>)}
      </header>
      {currentSnippet.component}
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import './RandomQuoteMachine.css'

function RandomQuoteMachine() {
  const quoteBank = [
    {author: 1, text: "test quote one"},
    {author: 2, text: "test quote two"},
    {author: 3, text: "test quote three"},
    {author: 4, text: "test quote four"},
    {author: 5, text: "test quote five"},
    {author: 6, text: "test quote six"},
    {author: 7, text: "REALLY REALLY LONG QUOTE AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAAA AAA AAAA AAA AAAA AAA AAA AAAA AAA AAAA AAA AAA AAAA AAA AAA AAA AAAA A"}
  ]
  
  const [currentQuote, setCurrentQuote] = useState(quoteBank[Math.floor(Math.random() * quoteBank.length)]);
  
  const randomizeQuote = () => {
    var newIndex = Math.floor(Math.random()*quoteBank.length);
    setCurrentQuote(quoteBank[newIndex]);
  }
  
  const getTwitterUrl = () => {
    return `https://twitter.com/intent/tweet?text=%22${encodeURI(currentQuote.text)}%22%20%2D${encodeURI(currentQuote.author)}`;
  }
  
  return(
    <div id="background">
      <div id="quote-box">
        <QuoteBoxBody quote={currentQuote}/>
        <QuoteBoxFooter tweet={getTwitterUrl()} randomize={randomizeQuote}/>
      </div>
    </div>
  );
}


function QuoteBoxFooter(props) {
  return(
    <div id="box-footer">
      <a id="tweet-quote" href={props.tweet}>Tweet Quote</a>
      <div id="spacer"></div>
      <button id="new-quote" onClick={props.randomize}>New Quote</button>
    </div>
  );
}


function QuoteBoxBody(props) {
  return(
    <div id="box-body">
      <div id="text">
        {props.quote.text}
      </div>
      <div id="author">
        - {props.quote.author}
      </div>
    </div>
  );
}

export default RandomQuoteMachine;
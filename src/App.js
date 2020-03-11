import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting Title ${title}`)
    console.log(`Submitted this content`, content)
    setTitle("")
    setContent("")
  }

  return (
    <div className="App">
      <header className="App-header">
        <span className="logo">☽</span> <p>moon journal</p>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}>
        </input>
        <textarea
          placeholder="What happened..."
          value={content}
          onChange={e => setContent(e.target.value)}>
        </textarea>
        <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}

export default App;

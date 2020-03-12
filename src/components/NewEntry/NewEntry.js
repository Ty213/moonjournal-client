import React, { useState } from 'react';

let journalID = 1;

function saveEntry(title,content,date) {
  localStorage.setItem(journalID, JSON.stringify({
    title,
    content,
    date
  }))
  journalID++
}

function NewEntry() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date()
    saveEntry(title,content,date)
    setTitle("")
    setContent("")
  }

  return (
    <div className="form-wrapper">
      <input
        className="title-input"
        placeholder="Title"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}>
      </input>
      <textarea
        className="content-input"
        placeholder="What happened..."
        value={content}
        onChange={e => setContent(e.target.value)}>
      </textarea>
      <input onClick={handleSubmit} className="submit-input" type="submit" value="Save" />
    </div>
  )
}

export default NewEntry

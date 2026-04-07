import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [notes, setnotes] = useState([])

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes")
      .then((res) => {
        setnotes(res.data.notes)
      })
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const title = formData.get('title')?.toString().trim()
    const description = formData.get('description')?.toString().trim()

    // console.log(title, description)

    axios.post("http://localhost:3000/api/notes", {
      title: title,
      description: description
    })
      .then((res) => {
        // console.log(res.data)
        fetchNotes()
        e.target.reset()
      })
  }

  function handleDelete(noteId) {
    // console.log(noteId)
    axios.delete(`http://localhost:3000/api/notes/${noteId}`)
      .then(res => {

        fetchNotes()
      })
  }

  function handleResubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const noteId = formData.get('noteId')?.toString().trim()
    const description = formData.get('description')?.toString().trim()

    let ntId = notes[noteId - 1]._id

    axios.patch(`http://localhost:3000/api/notes/${ntId}`, {
      description: description
    })
      .then(res => {
        fetchNotes()
        e.target.reset()
    })
  }

  return (
    <>

      <div className="forms">
        <form className='note-create-form' onSubmit={handleSubmit}>
          <h2>Add Note</h2>
          <input type="text" name="title" placeholder='Enter title' />
          <input type="text" name="description" placeholder="Enter description" />
          <button type="submit">Create Note</button>
        </form>

        <form className='note-create-form' onSubmit={handleResubmit}>
          <h2>Update description</h2>
          <input type="text" name="noteId" placeholder='Enter note number' />
          <input type="text" name="description" placeholder="Enter modified description" />
          <button type="submit">update Note</button>
        </form>
      </div>

      <div className="notes">
        {
          notes.map(note => {
            return <div className="note" key={note._id || note.id}>
              <h2>{note.title}</h2>
              <p>{note.description}</p>
              <button onClick={() => { handleDelete(note._id) }}>Delete</button>
            </div>
          })
        }

      </div>

      
    </>
  )
}

export default App

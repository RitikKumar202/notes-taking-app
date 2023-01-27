import React from 'react'
import { Link } from 'react-router-dom'

export default function NoteItem({ note }) {
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h4>{note.title.length > 40 ? (note.title.substr(0, 40)) + "..." : note.title}</h4>
      <p className='desc'>{note.description.length > 100 ? (note.description.substr(0, 100)) + "..." : note.description}</p>
      <p className='date'>{note.date}</p>
    </Link>
  )
}

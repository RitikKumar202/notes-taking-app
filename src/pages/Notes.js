// import {CiSearch} from "react-icons/ci"
import { BsPlusLg } from "react-icons/bs"
import { Link } from "react-router-dom"
import NoteItem from "../components/NoteItem"

export default function Notes({ notes }) {
  return (
    <section>
      <header className="notes__header">
        <h2>My Notes</h2>
        {/* <button className="btn"><CiSearch /></button> */}
      </header>

      <div className="notes__container">
        {
          notes.map(note => <NoteItem key={note.id} note={note} />)
        }
      </div>
      <Link to="/create-note" className="btn add__btn"><BsPlusLg /></Link>
    </section>
  )
}

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { Link, useNavigate, useParams } from 'react-router-dom'
import useCreateDate from "../components/useCreateDate";

export default function EditNote({ notes, setNotes }) {
    const { id } = useParams();
    const note = notes.find((item) => item.id === id);
    const [title, setTitle] = useState(note.title)
    const [description, setDescription] = useState(note.description)
    const date = useCreateDate();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();

        if (title && description) {
            const newNote = { ...note, title, description, date }

            const newNotes = notes.map(item => {
                if (item.id === id) {
                    item = newNote;
                }
                return item;
            })
            setNotes(newNotes);
        }

        // redirect to home page after update
        navigate("/");
    }

    const handleDelete = () => {
        const newNotes = notes.filter(item => item.id !== id);

        setNotes(newNotes);
        navigate("/");
    }

    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn" ><IoIosArrowBack /></Link>
                <button className='btn lg primary' onClick={handleUpdate}>Update Notes</button>
                <button className='btn lg danger' onClick={handleDelete}><RiDeleteBin6Line /></button>
            </header>

            <form className="create-note__form">
                <input type="text" placeholder="Title" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea rows="28" placeholder="Note Description..." value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
            </form>
        </section>
    )
}

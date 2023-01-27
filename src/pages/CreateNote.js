import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from "uuid"

import useCreateDate from "../components/useCreateDate"

export default function CreateNote({setNotes}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const date = useCreateDate();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && description) {
            const note = { id: uuid(), title, description, date }
            // add this note to the note array
            setNotes(prevNotes => [note, ...prevNotes])

            // redirect home page
            navigate('/');
        }
    }

    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn arrowBack" ><IoIosArrowBack /></Link>
                <button className='btn lg primary' onClick={handleSubmit}>Add Notes</button>
            </header>

            <form className="create-note__form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea rows="28" placeholder="Note description..." value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
            </form>
        </section>
    )
}

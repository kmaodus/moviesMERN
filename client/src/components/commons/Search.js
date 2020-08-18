import React, { useState } from 'react'
import '../../index.css';

const Search = ({ getQuery }) => {

    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search center'>
            <form className='searchBar' >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search any movie"
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
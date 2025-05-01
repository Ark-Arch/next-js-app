import React from 'react'

const Books = async () => {
    const response = await fetch('http://localhost:3000/api/books');
    const books = await response.json()

    console.log(books)

    return (
        <div>
            <h1>BOOKS PAGE</h1>
        </div>
    )
}

export default Books
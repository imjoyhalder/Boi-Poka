import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('./booksdata.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
            {
                books.map(book => <Book key={book.bookId} book={book} ></Book>)
            }
        </div>
    );
};

export default Books;

//**
// 1. state to 
//  */
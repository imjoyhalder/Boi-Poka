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
        <div className='my-10'>
            <h1 className='text-center text-5xl font-bold mb-6'>Books</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6  justify-items-center '>
            {
                books.map(book => <Book key={book.bookId} book={book} ></Book>)
            }
        </div>
        </div>
        
    );
};

export default Books;

//**
// 1. state to 
//  */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const { bookId } = useParams()
    const data = useLoaderData()

    const book = data.find(book => parseInt(book.bookId) === parseInt(bookId))
    const { bookName, image, author, review, tags, category,yearOfPublishing, publisher, rating, totalPages } = book

    const handleMarkAsRead = () =>{
        /**
         * 1. understand what to store or save => bookId
         * 2. Where to store: database
         * 3. array,list,collection: 
         * 4. if the book is already in the readList 
         * 5. if not , then add the book to the list
         * 6. if yes, don not add the book 
         */
    }

    return (
        <div className='grid md:grid-cols-2 py-6 gap-10 px-3'>
            <figure className=' bg-slate-100 rounded-xl'>
                <img className='mx-auto w-96 px-5 pb-20 pt-20' src={image} alt={bookName} />
            </figure>
            <div className='space-y-3 border px-3 pb-3 pt-1 rounded-xl'>
                <h1 className='text-4xl font-bold'>{bookName}</h1>
                <p>By : {author}</p>
                <div className='border border-gray-400 '></div>
                <p className='text-lg'>{category}</p>
                <div className='border border-gray-400 '></div>
                <div>
                    <p className='text-gray-300 text-sm'><span className='font-bold text-lg'>Review : </span>
                        {review}
                    </p>
                </div>
                <div className='flex gap-4'>
                    {
                        tags.map(tag => <p className='border border-green-500 p-2 rounded-xl'>#{tag}</p>)
                    }
                </div>
                <div className='border border-gray-400 '></div>
                <div className='space-y-2'>
                    <p>Number of Pages : <span className='font-bold'>{totalPages}</span> </p>
                    <p>Publisher : <span className='font-bold'>{publisher}</span></p>
                    <p>Year of Publishing : <span className='font-bold'>{yearOfPublishing}</span></p>
                    <p>Rating : <span className='font-bold'>{rating}</span></p>
                </div>
                <div className='space-x-3 pt-3'>
                    <button className="btn btn-outline mr-4 btn-accent" onClick={handleMarkAsRead}>Mark as Read</button>
                    <button className="btn btn-accent">Add to WishList</button>
                </div>

            </div>
        </div>
    );
};

export default BookDetail;
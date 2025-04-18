import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const { bookId } = useParams()
    const data = useLoaderData()

    const book = data.find(book => parseInt(book.bookId) === parseInt(bookId))
    const { bookName, image, author, review, tags, category,yearOfPublishing, publisher, rating, totalPages } = book
    return (
        <div className='grid md:grid-cols-2 py-6 gap-10 px-3'>
            <figure className=' bg-slate-100 rounded-xl'>
                <img className='mx-auto w-96 px-5 pb-20 pt-20' src={image} alt={bookName} />
            </figure>
            <div className='space-y-3'>
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
                <div className='space-x-5 pt-3'>
                    <button className="btn btn-soft">Red</button>
                    <button className="btn btn-accent">WishList</button>
                </div>

            </div>
        </div>
    );
};

export default BookDetail;
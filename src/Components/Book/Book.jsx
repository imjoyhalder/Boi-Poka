import React from 'react';

const Book = ({ book }) => {
    const { bookName, image, author, review, tags, category } = book
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6 bg-gray-900 rounded-xl">
            <figure className='bg-blue-200 py-8  rounded-xl '>
                <img
                    src={image}
                    className='h-[166px] '
                    alt={bookName} />
            </figure>
            <div className="pt-3 space-y-2 pb-2">
                <div className='flex gap-4 '>
                    {
                        tags.map(tag => <button className='btn btn-sm rounded-2xl bg-green-200 text-sm font-bold hover:bg-green-300 duration-500 text-green-500'>{tag}</button>)
                    }
                </div>
                <h2 className="card-title text-xl font-bold">
                    {bookName}
                </h2>
                <p>By: {author}</p>
                <div className="border-t-2 border-dashed "></div>
                <div className='card-actions justify-between'>
                    <div className='badge badge-outline'>{category}</div>
                    <div className=''>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-500" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-500" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-500" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
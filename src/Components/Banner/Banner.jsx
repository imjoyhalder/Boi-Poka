import React from 'react';
import bannerImg from '../../assets/Images/book-2.jpg'

const Banner = () => {
    return (
        <div className='md:flex bg-gradient-to-tr from-purple-500 via-green-400 to-yellow-300 rounded-3xl items-center px-2'>
            <div className='p-20 space-y-8'>
                <h1 className='text-5xl text-black'>Books to freshen up your bookshelf</h1>
                <button class="btn btn-success text-black text-lg p-5 rounded-xl ">View The List</button>
            </div>
            <div className='p-20'>
                <img className='md:max-w-64 rounded-2xl' src={bannerImg}alt="" />
            </div>
        </div>
    );
};

export default Banner;
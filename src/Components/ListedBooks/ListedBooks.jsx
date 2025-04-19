import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utlity/addToDB';
import Book from '../Book/Book';
import NothingAdded from '../NothingAdded/NothingAdded';

const ListedBooks = () => {

    const [readList, setReadList] = useState([])
    const [sort , setSort] = useState('')
    const allBooks = useLoaderData()

    useEffect(() => {
        // this is the worst way 
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))

        //console.log(  storedReadList,  allBooks, storedReadListInt);
        //console.log(storedReadList)
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        //console.log(readBookList)
        setReadList(readBookList)
    }, [])

    const handleSort = sortType =>{
        setSort(sortType)

        if(sortType=== 'No of pages'){
            const sortedReadList = [...readList].sort((a,b) => a.totalPages-b.totalPages)
            setReadList(sortedReadList)
        }

        if(sortType === 'Ratings'){
            const sortedReadList = [...readList].sort((a,b) => a.rating-b.rating)
            setReadList(sortedReadList)
        }

        if(sortType === 'publish-year'){
            const sortedReadList = [...readList].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing)
            setReadList(sortedReadList)
        }
    }

    return (
        // ideally we will directly get the read book list from the database
        <div className=''>
            <h3 className="text-3 my-8">Listed Books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">{sort? `Sort by: ${sort}` : 'Sort by' }</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=> handleSort('No of pages')}><a>Number of pages</a></li>
                    <li onClick={()=> handleSort('publish-year')}><a>Publisher year</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab >Read List {readList.length}</Tab>
                    <Tab >Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='my-5 '>
                        <h2 className='text-3xl text-center my-5'>Books I read</h2>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6  justify-items-center'>
                            {
                                readList.length == 0 ? <NothingAdded></NothingAdded> : readList.map(book => <Book book={book} key={book.bookId}></Book>)
                            }
                        </div>
                    </div>

                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl text-center my-5'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
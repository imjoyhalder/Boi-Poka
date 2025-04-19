import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utlity/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {

    const [readList, setReadList] = useState([])

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

    return (
        // ideally we will directly get the read book list from the database
        <div className=''>
            <h3 className="text-3 my-8">Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab >Read List {readList.length}</Tab>
                    <Tab >Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='my-5'>
                        <h2 className='text-3xl text-center my-5'>Books I read</h2>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6  justify-items-center'>
                            {   
                               readList.length==0? <div className=''><h1 className='text-center'>
                                Nothing added here
                               </h1></div>: readList.map(book => <Book book={book} key={book.bookId}></Book>)
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
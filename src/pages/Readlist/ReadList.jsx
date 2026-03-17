import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [sort, setSort] =useState("");
    const [readList, setReadList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        setReadList(myReadList)

    },[])

    const handleSort = (type) =>{
        setSort(type);
        if(type === "pages"){
            const sortedByPage = [...readList].sort((a,b) => a.totalPages -b.totalPages);
            setReadList(sortedByPage)
        }
        if(type === "ratings"){
            const sortedByRatings = [...readList].sort((a,b) => a.rating -b.rating);
            setReadList(sortedByRatings)
        }
    }

    return (

        <div className='my-8'>
            <div className='my-10 flex justify-center'>
                <button className="btn btn-success text-white" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } }>
                    Sort By : {sort ? sort : ""}
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } }>
                    <li><a onClick={() => handleSort('pages')}>Sort By Pages</a></li>
                    <li><a onClick={() => handleSort('ratings')}>Sort By Ratings</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Read Books: {readList.length}</h2>

                    {
                        readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Wishlist Books</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;
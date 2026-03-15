import React, { use } from 'react';
import { IoIosStarHalf } from "react-icons/io";

const Book = ({ singleBook }) => {
    // const data = use(bookPromise);
    const { bookName, author, image, category, rating } = singleBook;

    return (
        <div className=" bg-base-100 border rounded-2xl border-gray-100 p-6">
            <figure className='py-[32px] px-[96px] bg-gray-100'>
                <img className='w-[124px] h-[166px]'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex text-green-400 gap-2 text-center text-xl mb-4'>
                    <p className='px-4 py-2 bg-gray-100 border-0 rounded-2xl'>Young Adult</p>
                    <p className='px-4 py-2 bg-gray-100 border-0 rounded-2xl'>Identity</p>
                </div>
                <h2 className="card-title">
                    {bookName}
                </h2>
                <p className='text-xl'>By : {author}</p>
                <div className="mt-4 flex border-t-1 border-dashed border-gray-200">
                    <p className='mt-2 text-xl'>{category}</p>
                    <h4 className='mt-2 text-2xl flex items-center gap-2'>{rating}<IoIosStarHalf /></h4>
                </div>
            </div>
        </div>
    );
};

export default Book;
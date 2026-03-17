import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId)
    const { bookName, image, author, category, review, tags, rating, yearOfPublishing, publisher, totalPages } = singleBook || {};

    const handleMarksAsRead = id => {
        // Store with Id 
        // where to store 
        // array or collection 
        // if book already exist the show a alert 
        // if book not exist then push in the collection or array 
        const result = addToStoredDB(parseInt(id));

        if (result === "exist") {
            MySwal.fire({
                title: "Already Added!",
                text: "This book already exists in your read list.",
                icon: "warning"
            })
        }
        else {
            MySwal.fire({
                title: "Good job!",
                text: "Book added to your read list!",
                icon: "success"
            })
        }

    }


    return (
        <div className="card lg:card-side bg-base-100 shadow-sm mt-[52px] mb-[160px]">
            <figure className='bg-gray-100 border-0 rounded-2xl'>
                <img className='w-[425px] h-[564px] p-[75px]'
                    src={image}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{bookName}</h2>
                <p className='text-xl'>By : {author}</p>

                <div className=" flex border-y-1 border-dashed border-gray-200">
                    <p className=' p-4 text-xl'>{category}</p>
                </div>

                <p className='w-150 '><span className='font-bold text-xl'>Review : </span>{review}</p>

                <div className='flex text-green-500 gap-2 text-center text-xl my-4 border-b-1 border-dashed border-gray-200 pb-6'> <span className='text-black font-bold'>Tag :</span>
                    {
                        tags.map(tag => <p className='px-4 py-2 bg-gray-100 border-0 rounded-2xl'>#{tag}</p>
                        )
                    }
                </div>

                <p className='flex justify-between'><span>Number of Pages:</span><span className='font-bold'>{totalPages}</span></p>
                <p className='flex justify-between'><span >Publisher:</span> <span className='font-bold'>{publisher}</span></p>
                <p className='flex justify-between'><span>Year of Publishing:</span> <span className='font-bold'>{yearOfPublishing}</span></p>
                <p className='flex justify-between'><span>Rating:</span> <span className='font-bold'>{rating}</span></p>


                <div className="card-actions mt-4">
                    <button onClick={() => handleMarksAsRead(id)} className="btn btn-secondary ">Mark as Read</button>
                    <button className="btn btn-primary">Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 px-[120px] py-[80px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bookImg}
                    className="max-w-sm rounded-lg "
                />
                <div>
                    <h1 className="text-5xl font-bold mb-[48px]">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
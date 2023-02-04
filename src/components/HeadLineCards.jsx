import React from 'react';

const HeadLineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>
                        Sun's Out, BOGO's Out
                    </p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                        Order Now
                    </button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1608475861994-cf7af0f0c1be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='eggs'
                />
            </div>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>
                        New Restaurants
                    </p>
                    <p className='px-2'>Added daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                        Order Now
                    </button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='coffee'
                />
            </div>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>
                        We Deliver Desserts Too
                    </p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                        Order Now
                    </button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1579372786545-d24232daf58c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='dessert'
                />
            </div>
        </div>
    );
};

export default HeadLineCards;

import React from 'react'
function Details() {
    return (
        <div className='w-full bg-sky-500 opacity-100 absolute top-0 left-0 '>
            <div className='w-8/12 h-[80vh] bg-white opacity-100 mx-auto mt-8 rounded-2xl'>
                <div className='p-10 bg-white text-2xl'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <p className='text-gray-500'>Name</p>
                            <p className='p-3 bg-gray-200 rounded-2xl'>Mohammad reza</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>Username</p>
                            <p className='p-3 bg-gray-200 rounded-2xl'>Mohammad reza</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-gray-500'>Address</p>
                            <p className='p-3 bg-gray-200 rounded-2xl'>Tehran</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>Email</p>
                            <p className='p-3 bg-gray-200 rounded-2xl'>Tehran</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>Phone</p>
                            <p className='p-3 bg-gray-200 rounded-2xl'>Tehran</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>Company</p>
                            <p className='p-3 bg-gray-200 rounded-2xl'>name</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details






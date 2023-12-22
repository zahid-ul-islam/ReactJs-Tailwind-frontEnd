import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className='flex justify-evenly  items-center h-20 mt-0 border-b-2'>
        <div>
            <span className='font-extrabold text-2xl text-customNavBtn1 '>NFTERS</span>
        </div>
        <div className='flex gap-8 font-bold'>
            <span>Marketplace</span>
            <span>Resource</span>
            <span>About</span>
        </div>
        <div className='flex gap-7'>
        <div className="flex items-center justify-center relative">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 py-1 px-4 rounded-full focus:outline-none focus:border-blue-500"
      />
       <div className="ml-40 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
       <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#b0b0b0" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
         
        </div>
     
    </div>
            <div className='flex gap-7'>
                <button className=' font-bold bg-customNavBtn1 rounded-full py-1 px-4 text-white'>Upload</button>
                <button className=' font-bold rounded-full py-1 px-3 border border-customNavBtn1 border-2 text-customNavBtn1 '>Connect Wallet</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavBar
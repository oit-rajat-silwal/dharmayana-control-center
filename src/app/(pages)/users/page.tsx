'use client'
import UserListing from '@/componenets/Users/UserListing';
import { useUserContext } from '@/contexts/UserContext';
import { Pagination, PaginationItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserPage: React.FC = () => {
    let { setSearchText, fetchUsers, searchText, handleKeyDown, users, handlePageChange, handleSorting, currentPage, userPerPage, totalUsers } = useUserContext()
    return (
        <div className=' lg:bg-white flex flex-col gap-[40px] lg:py-[1.5rem] lg:px-[2rem] rounded-lg lg:border-2  border-[#D4D4D4]'>
            <div className='flex justify-between items-center gap-[8px]'>
                <div className="font-sans grid gap-2">
                    <h1 className="font-bold text-[24px]  text-[#171717]">Users</h1>
                    <span className='text-[#737373] text-md'>List of all users on the Control Center</span>
                </div>
                <Link href={`/users/add-user`}>
                    <button className=" p-3 rounded-md border border-solid opacity-100 bg-[#CD5712] text-white items-center flex gap-2">
                        <Image src={`/add-user-icon.svg`} height={20} width={20} alt={"add-user-icon"} />
                        <span>Add User</span>
                    </button>
                </Link>
            </div>
            <div className="flex  gap-[1rem]">

                <input
                    type="text"
                    placeholder="Search By Name"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    onKeyDown={handleKeyDown}
                    className="p-2 gap-0 rounded-md border border-solid border-[#D4D4D4] bg-white opacity-100"
                />


                <button className=" p-2 rounded-md border border-solid opacity-100 bg-[#F5F5F5] text-[#CD5712]" onClick={() => fetchUsers(1, searchText || "")}>
                    Search
                </button>

            </div>
            <div className='flex flex-col gap-[24px]'>
                <UserListing users={users} handleSorting={handleSorting} />
                {totalUsers > 5 ? <div className="grid lg:flex lg:items-center lg:justify-between justify-center gap-6">
                    <Pagination
                        className='lg:order-2'
                        count={Math.ceil(totalUsers / userPerPage)} // Calculate total number of pages
                        page={currentPage} // Current active page
                        onChange={handlePageChange} // Handle page change
                        shape="rounded"
                        color="primary"
                        size="large"
                        renderItem={(item) => (
                            <PaginationItem
                                {...item}
                                slots={{
                                    previous: () => <button className='flex items-center gap-[1rem]'>
                                        <Image src={'/paginantion-arrow.svg'} width={16} height={16} alt="paginantion-previous-arrow" />
                                        <span>
                                            Previous
                                        </span>
                                    </button>, // Custom "Previous" button
                                    next: () => <button className='flex items-center gap-[1rem]'>
                                        <span>
                                            Next
                                        </span>
                                        <Image src={'/paginantion-arrow.svg'} width={16} height={16} alt="paginantion-previous-arrow" className='rotate-180' />
                                    </button> // Custom "Next" button
                                }}
                            />
                        )}
                    />
                    <p className=' lg:order-1 font-sans font-[500] text-[#737373] text-center'>{`Showing ${currentPage < 2 ? currentPage : (currentPage) * userPerPage - 5}-${(currentPage) * userPerPage} of ${totalUsers} Customers`}</p>
                </div> : ''}
            </div>
        </div>
    );
}

export default UserPage;

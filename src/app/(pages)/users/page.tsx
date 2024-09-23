'use client'
import UserListing from '@/componenets/Users/UserListing';
import { SortOption, UserDetails } from '@/globalTypes';
import { CUSTOMER_DATA } from '@/services/customer-services';
import { USER_DATA } from '@/services/user_services';
import { Pagination, PaginationItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const UserPage: React.FC = () => {
    const [sortOption, setSortOption] = useState<SortOption>('name');
    const [users, setUsers] = useState<UserDetails[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const userPerPage = 5;
    const [totalUsers, setTotalUsers] = useState(0);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value); // Update the current page
    };

    const fetchCustomers = async (page: number) => {
        const fetchedCustomers = [...USER_DATA].splice((page - 1) * userPerPage, userPerPage);
        setUsers(sortUsers(fetchedCustomers, sortOption));
        if (!totalUsers) {
            setTotalUsers(CUSTOMER_DATA.length);
        }
    };
    const sortUsers = (users: UserDetails[], sortBy: SortOption): UserDetails[] => {
        return [...users].sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'role':
                    return a.role.localeCompare(b.role);
                case 'status':
                    return a.status.localeCompare(b.status);
                case 'last_login':
                    return new Date(a.last_login).getTime() - new Date(b.last_login).getTime();
                default:
                    return 0;
            }
        });
    };
    const handleSorting = (sortOption: SortOption) => {
        setSortOption(sortOption);
    };

    useEffect(() => {
        if (users.length) {
            setUsers(sortUsers(users, sortOption));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortOption])

    useEffect(() => {
        fetchCustomers(currentPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    return (
        <div className=' lg:bg-white flex flex-col gap-[40px] lg:py-[1.5rem] lg:px-[2rem] rounded-lg lg:border-2  border-[#D4D4D4]'>
            <div className='flex justify-between items-center gap-[8px]'>
                <div className="font-sans grid gap-2">
                    <h1 className="font-bold text-[24px]  text-[#171717]">Users</h1>
                    <span className='text-[#737373] text-md'>List of all users on the Control Center</span>
                </div>
                <Link href={`/user/add-user`}>
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
                    className="p-2 gap-0 rounded-md border border-solid border-[#D4D4D4] bg-white opacity-100"
                />


                <button className=" p-2 rounded-md border border-solid opacity-100 bg-[#F5F5F5] text-[#CD5712]">
                    Search
                </button>

            </div>
            <div className='flex flex-col gap-[24px]'>
                <UserListing users={users} handleSorting={handleSorting} />
                <div className="grid lg:flex lg:items-center lg:justify-between justify-center gap-6">
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
                </div>
            </div>
        </div>
    );
}

export default UserPage;

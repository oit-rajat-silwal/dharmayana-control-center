import React from 'react';
import UserListingCard from "./UserListingCard";
import Image from 'next/image';
import { SortOption, UserDetails } from '@/globalTypes';

// Updated Customer type definition


// Props for the CustomerListing component
interface UserListingProps {
    users: UserDetails[];
    handleSorting: (sortOption: SortOption) => void;
}

// CustomerListing component
const UserListing: React.FC<UserListingProps> = ({ users, handleSorting }) => {
    return (
        <div >
            <div className="grid gap-8 lg:gap-0 lg:bg-white lg:rounded-lg">
                <div className="hidden lg:grid  lg:grid-cols-5 p-6 gap-10 font-[500] lg:border-b-2 lg:border-[#D4D4D4]">

                    <h3 className="font-sans text-md text-gray-500 flex gap-2 items-center cursor-pointer " onClick={() => { handleSorting('name') }}>
                        <span>
                            Name
                        </span>
                        <Image src={`/sort-icon.svg`} width={16} height={16} alt="the-sort-icon" />
                    </h3>

                    <h3 className="font-sans text-md text-gray-500 flex gap-2 items-center cursor-pointer " onClick={() => { handleSorting('role') }}>
                        <span>
                            Role
                        </span>
                        {/* <Image src={`/sort-icon.svg`} width={16} height={16} alt="the-sort-icon"  /> */}
                    </h3>

                    <h3 className="font-sans text-md text-gray-500 flex gap-2 items-center cursor-pointer " onClick={() => { handleSorting('last_login') }}>
                        <span>
                            Last Login
                        </span>
                        <Image src={`/sort-icon.svg`} width={16} height={16} alt="the-sort-icon" />
                    </h3>

                    <h3 className="font-sans text-md text-gray-500 flex gap-2 items-center cursor-pointer " onClick={() => { handleSorting('status') }}>
                        <span>
                            Status
                        </span>
                        {/* <Image src={`/sort-icon.svg`} width={16} height={16} alt="the-sort-icon" /> */}
                    </h3>

                </div>
                {users.map((user,index) => (
                    <UserListingCard key={user.id} userData={user} index={index} />
                ))}
            </div>

        </div >

    );
};

export default UserListing;

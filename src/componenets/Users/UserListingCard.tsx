import React from 'react';
import dayjs from 'dayjs'; // Import dayjs for date formatting
import { UserDetails } from '@/globalTypes';
import Link from 'next/link';
import Image from 'next/image';

// Updated Customer type definition


// Props for the CustomerListingCard component
interface UserListingCardProps {
    userData: UserDetails;
    index: number;
}

// CustomerListingCard component
const UserListingCard: React.FC<UserListingCardProps> = ({ userData, index }) => {
    return (
        <Link href={`/customers/${userData.id}`}>
            <div className={`grid p-6 gap-4 bg-white lg:bg-transparent  border border-solid border-[#D4D4D4] border-t-2  lg:border-0  lg:rounded-none ${(index < 4) ? 'lg:border-b-2' : ''} rounded-lg   `}>
                <div className='grid gap-2 lg:hidden '>
                    <div className='flex gap-2 justify-between items-center '>
                        <h2 className="font-sans font-semibold text-md leading-5 tracking-normal text-left text-[#171717]">
                            {userData.email}
                        </h2>
                        <p className='border-2 border-[#86EFAC] bg-[#DCFCE7] rounded-3xl py-[0.3rem] px-[0.8rem] text-[#16A34A] text-center lg:hidden'>{userData.status}</p>
                    </div>
                    <hr className="border border-solid border-[#D4D4D4]" />
                </div>
                <div className="grid grid-cols-2 gap-10  lg:grid-cols-5 ">
                    {/* User Name */}
                    <div className="grid gap-2 hidden lg:block">
                        <h3 className="font-sans text-sm text-[#171717] ">{userData.name}</h3>
                        <p className="font-sans text-sm  font-semibold text-[#737373] whitespace-normal break-words ">{userData.email}</p>
                    </div>
                    {/* Phone Number */}
                    <div className="grid gap-2">
                        <h3 className="font-sans text-sm text-gray-500 lg:hidden">Role</h3>
                        <p className="font-sans text-base text-gray-900">{userData.role}</p>
                    </div>

                    {/* Gender */}
                    <div className="grid gap-2">
                        <h3 className="font-sans text-sm text-gray-500 lg:hidden ">Last Login</h3>
                        <p className="font-sans text-base text-gray-900">{dayjs(userData.last_login).format('DD MMM YYYY hh:mm a')}</p>
                    </div>
                    <div className="flex gap-2 justify-center hidden lg:block">
                        <p className={` lg:w-full 2xl:w-2/4  border-2   ${userData.status ? 'bg-[#DCFCE7] border-[#86EFAC] text-[#16A34A]' : 'bg-[#F5F5F5] border-[#737373] text-[#737373]'} rounded-3xl py-[0.3rem] px-[0.8rem]  text-center hidden lg:block`}>{userData.status ? 'Active' : 'Inactive'}</p>
                    </div>
                    <Link href={`/users/${userData.name.replaceAll(" ", "-")}`}>
                        <div className="flex justify-end items-center">
                            <div className="  lg:w-full 2xl:w-2/4  bg-[#F5F5F5] hover:bg-[#fef7ec]  gap-2 justify-center py-[0.5rem] px-[1rem] items-center hidden lg:flex rounded-md">
                                <Image src={'/edit-icon.svg'} width={16} height={16} alt="edit-user-icon" />
                                <span className='text-[#CD5712]'>Edit</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="flex gap-2 justify-center lg:hidden bg-[#F5F5F5] hover:bg-[#fef7ec] py-2 px-4 rounded-lg">
                    <Image src={'/edit-icon.svg'} width={16} height={16} alt="edit-user-icon" />
                    <span className='text-[#CD5712]'>Edit</span>
                </div>
            </div>
        </Link>
    );
};

export default UserListingCard;

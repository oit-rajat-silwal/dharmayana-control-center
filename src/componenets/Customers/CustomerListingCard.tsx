import React from 'react';
import dayjs from 'dayjs'; // Import dayjs for date formatting
import { Customer } from '@/globalTypes';
import Link from 'next/link';

// Updated Customer type definition


// Props for the CustomerListingCard component
interface CustomerListingCardProps {
    customerData: Customer;
    index: number;
}

// CustomerListingCard component
const CustomerListingCard: React.FC<CustomerListingCardProps> = ({ customerData, index }) => {
    return (
        <Link href={`/customers/${customerData.id}`}>
            <div className={`grid w-full h-auto p-6 gap-4 bg-white lg:bg-transparent  border border-solid border-[#D4D4D4] border-t-2  lg:border-0  lg:rounded-none ${(index < 4) ? 'lg:border-b-2' : ''} rounded-lg  hover:bg-[#fef7ec] `}>
                <div className='grid gap-2 lg:hidden '>
                    <h2 className="font-sans font-semibold text-md leading-5 tracking-normal text-left text-[#CD5712]">
                        {customerData.name}
                    </h2>

                    <hr className="border border-solid border-[#D4D4D4]" />
                </div>
                <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5 ">
                    {/* User Name */}
                    <div className="grid gap-2 hidden lg:block">
                        <h3 className="font-sans text-sm text-gray-500 lg:hidden ">Name</h3>
                        <p className="font-sans text-base font-semibold text-[#CD5712]">{customerData.name}</p>
                    </div>
                    {/* Phone Number */}
                    <div className="grid gap-2">
                        <h3 className="font-sans text-sm text-gray-500 lg:hidden">Phone Number</h3>
                        <p className="font-sans text-base text-gray-900">{customerData.phone}</p>
                    </div>

                    {/* Gender */}
                    <div className="grid gap-2">
                        <h3 className="font-sans text-sm text-gray-500 lg:hidden">Gender</h3>
                        <p className="font-sans text-base text-gray-900">{customerData.gender}</p>
                    </div>

                    {/* Age */}
                    <div className="grid gap-2">
                        <h3 className="font-sans text-sm text-gray-500 lg:hidden">Age</h3>
                        <p className="font-sans text-base text-gray-900">{customerData.age} Years</p>
                    </div>

                    {/* Customer Since */}
                    <div className="grid gap-2">
                        <h3 className="font-sans text-sm text-gray-500 lg:hidden">Customer Since</h3>
                        <p className="font-sans text-base text-gray-900">
                            {dayjs(customerData.since).format('D MMM YYYY')}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CustomerListingCard;

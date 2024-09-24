import React from 'react';
import CustomerListingCard from './CustomerListingCard';
import Image from 'next/image';
import { CustomerDetailsType, SortOption } from '@/globalTypes';

// Updated Customer type definition
type Customer = {
    id: string;
    name: string;
    gender: string;
    phone: string;
    age: number;
    since: string; // Date as ISO string
};

// Props for the CustomerListing component
interface CustomerListingProps {
    customers: CustomerDetailsType[];
    handleSorting: (sortOption: SortOption) => void;
}

// CustomerListing component
const CustomerListing: React.FC<CustomerListingProps> = ({ customers, handleSorting }) => {
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

                    <h3 className="font-sans text-md text-gray-500 flex gap-2 items-center " >
                        <span>
                            Phone Number
                        </span>
                        {/* <Image src={`/sort-icon.svg`} width={16} height={16} alt="the-sort-icon" /> */}
                    </h3>

                    <h3 className="font-sans text-md text-gray-500 flex gap-2 items-center cursor-pointer " onClick={() => { handleSorting('gender') }}>
                        <span>
                            Gender
                        </span>
                        <Image src={`/sort-icon.svg`} width={16} height={16} alt="the-sort-icon" />
                    </h3>

                    <h3 className="font-sans text-md text-gray-500 flex gap-2 items-center cursor-pointer " onClick={() => { handleSorting('age') }}>
                        <span>
                            Age
                        </span>
                        <Image src={`/sort-icon.svg`} width={16} height={16} alt="the-sort-icon" />
                    </h3>

                    <h3 className="font-sans text-md text-gray-500 flex gap-2 items-center cursor-pointer " onClick={() => { handleSorting('since') }}>
                        <span>
                            Customer Since
                        </span>
                        <Image src={`/sort-icon.svg`} width={16} height={16} alt="the-sort-icon" />
                    </h3>

                </div>
                {customers.map((customer,index) => (
                    <CustomerListingCard key={customer.id} customerData={customer} index={index} />
                ))}
            </div>

        </div >

    );
};

export default CustomerListing;

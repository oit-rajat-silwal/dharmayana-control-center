'use client'
import CustomerListing from '@/componenets/Customers/CustomerListing';
import { useCustomerContext } from '@/contexts/CustomerContext';
import { Pagination, PaginationItem } from '@mui/material';
import Image from 'next/image';

const CustomersPage: React.FC = () => {
  const { customers, handleSorting, totalCustomers, customersPerPage, currentPage, handlePageChange, setSearchParams, searchParams, fetchCustomers, handleKeyDown } = useCustomerContext()
  return (
    <div className=' lg:bg-white flex flex-col gap-[40px] lg:py-[1.5rem] lg:px-[2rem] rounded-lg lg:border-2  border-[#D4D4D4]'>
      <div className='grid gap-[8px]'>
        <h1 className="font-sans font-bold text-[24px]  text-[#171717]">
          Customers
        </h1>
        <p className="text-sm font-normal font-sans leading-5 tracking-normal text-left text-[#737373]">
          List of all customers on the App
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search By Name"
            value={searchParams.name}
            className="p-2 gap-0 rounded-md border border-solid border-[#D4D4D4] bg-white opacity-100"
            onKeyDown={handleKeyDown}
            onChange={(event) => {
              setSearchParams({
                ...searchParams,
                name: event.target.value
              })
            }}
          />
          <input
            type="text"
            placeholder="Search By Phone Number"
            value={searchParams.phone}
            className="p-2 gap-0 rounded-md border border-solid border-[#D4D4D4] bg-white opacity-100"
            onKeyDown={handleKeyDown}
            onChange={(event) => {
              setSearchParams({
                ...searchParams,
                phone: event.target.value
              })
            }}
          />
        </div>
        <div>
          <button className=" p-2 rounded-md border border-solid opacity-100 bg-[#CD5712] text-white" onClick={() => fetchCustomers(1, searchParams)}>
            Search
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-[24px]'>
        <CustomerListing customers={customers} handleSorting={handleSorting} />
        {totalCustomers > 5 ? <div className="grid lg:flex lg:items-center lg:justify-between justify-center gap-6">
          <Pagination
            className='lg:order-2'
            count={Math.ceil(totalCustomers / customersPerPage)} // Calculate total number of pages
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
          <p className=' lg:order-1 font-sans font-[500] text-[#737373] text-center'>{`Showing ${currentPage < 2 ? currentPage : (currentPage) * customersPerPage - 5}-${(currentPage) * customersPerPage} of ${totalCustomers} Customers`}</p>
        </div>:''}
      </div>
    </div>
  );
}

export default CustomersPage;

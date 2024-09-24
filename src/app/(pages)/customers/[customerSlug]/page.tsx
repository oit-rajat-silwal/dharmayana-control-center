'use client'
import { useCustomerContext } from '@/contexts/CustomerContext'
import dayjs from 'dayjs'
import React  from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomerDetails = ({ params: { customerSlug } }: { params: { customerSlug: string } }) => {
    const {selectedCustomer} = useCustomerContext();


    return (
        <div className=' grid gap-[40px] font-sans'>
            <div className='grid gap-[8px]'>
                <h1 className="font-sans font-bold text-[40px]  text-[#171717]">
                    {selectedCustomer.name}
                </h1>
                {/* <p className="text-sm font-normal font-sans leading-5 tracking-normal text-left text-[#737373]">
                    List of all customers on the App
                </p> */}
            </div>
            <div className='grid lg:grid-cols-2 gap-[24px]'>
                <div className='bg-[#FFFFFF] flex flex-col  gap-[24px] p-4 border-2 rounded-lg border-[#D4D4D4]'>
                    <h3 className='font-[600] text-[22px] text-[#171717]'>Basic Details</h3>
                    <div className='grid gap-[1rem]'>
                        <p className='grid grid-cols-2'>
                            <span className='text-[16px] text-[#737373] '>Name</span>
                            <span className='text-[20px] text-[#171717] '>{selectedCustomer.name}</span>
                        </p>
                        <p className='grid grid-cols-2'>
                            <span className='text-[16px] text-[#737373] '>Date of Birth</span>
                            <span className='text-[20px] text-[#171717]  '>{dayjs(selectedCustomer.dob).format('DD MMM, YYYY')}</span>
                        </p>
                        <p className='grid grid-cols-2'>
                            <span className='text-[16px] text-[#737373] '>Gender</span>
                            <span className='text-[20px] text-[#171717] '>{selectedCustomer.gender}</span>
                        </p>
                        <p className='grid grid-cols-2'>
                            <span className='text-[16px] text-[#737373] '>App Region</span>
                            <span className='text-[20px] text-[#171717] '>{selectedCustomer.app_region}</span>
                        </p>
                        <p className='grid grid-cols-2'>
                            <span className='text-[16px] text-[#737373] '>Location</span>
                            <span className='text-[20px] text-[#171717] '>{selectedCustomer.location}</span>
                        </p>

                    </div>
                </div>
                <div className='bg-[#FFFFFF] flex flex-col gap-[24px] p-4 border-2 rounded-lg border-[#D4D4D4]'>
                    <h3 className='font-[600] text-[22px] text-[#171717]'>Contact Details</h3>
                    <div className='grid gap-[1rem]'>
                        <p className='grid grid-cols-2'>
                            <span className='text-[16px] text-[#737373] '>Phone Number</span>
                            <span className='text-[20px] text-[#171717] '>{selectedCustomer.phone_number}</span>
                        </p>
                        <p className='grid grid-cols-2'>
                            <span className='text-[16px] text-[#737373] '>Email</span>
                            <span className='text-[20px] text-[#171717] whitespace-normal break-words'>{selectedCustomer.email}</span>
                        </p>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default CustomerDetails
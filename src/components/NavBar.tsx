import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const NavBar = () => {
    return (
        <div className={`nav-bar py-[12px] px-[20px] flex justify-between lg:justify-end items-center bg-[#FFFFFF]  `}>
            <Image src={'/hamburger-menu.svg'} width={24} height={24} alt='customer-listing-icon' className='lg:hidden cursor-pointer'
                onClick={() => {
                    document.querySelector('.sidebar')?.classList.remove('translate-x-[-120%]');
                }}
            ></Image>
            <div className='rounded-2xl h-[40px] w-[40px] overflow-hidden'>
                <Image src={'/avatar.webp'} width={1} height={1} alt='customer-listing-icon' className='h-full w-full' onClick={() => {
                    document.querySelector('.logout-container')?.classList.toggle('hidden');
                }}></Image>
                <Link href="/">
                    <div className='logout-container hidden absolute right-[1rem] top-[7%] w-[130px] h-[40px] rounded-xl bg-[#FFFFFF] hover:bg-[#fef7ec] hover:text-[#AB3A12] border-[#D4D4D4]  border-2 flex  justify-between items-center py-1 px-3'>

                        <span className='font-sans font-[500]'>
                            Logout
                        </span>
                        <Image src={'/log-out.svg'} width={16} height={16} alt='customer-listing-icon'  ></Image>

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar
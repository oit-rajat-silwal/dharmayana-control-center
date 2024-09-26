import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePermissions } from '@/contexts/PermissionsContext';

const invertIconColor = (icon: HTMLImageElement | null) => {
    if (icon) {
        icon.classList.toggle('brightness-0');
        icon.classList.toggle('invert');
    }

}

const SideBar = () => {
    const { permissions } = usePermissions();
    return (
        <div className={`sidebar transition ease-in-out delay-150 duration-300  h-full translate-x-[-120%] lg:translate-x-[0%] w-[60%] sm:w-[50%] md:w-[40%] absolute lg:relative  lg:basis-1/4 lg:h-screen bg-[#FFFFFF] z-10 p-[1rem] flex flex-col gap-[2rem] border-r-2 `}>
            <Image src={'/close-btn-black.svg'} width={24} height={24} alt='customer-listing-icon' className='lg:hidden cursor-pointer' onClick={() => {
                document.querySelector('.sidebar')?.classList.add('translate-x-[-120%]');
            }}></Image>
            <div className=" flex  justify-center items-center   ">
                <Image alt="Dharmāyana Flower"
                    loading="lazy" width="1" height="1"
                    className="logo-flower-img w-[1.125rem] h-[2.75rem] "
                    src="https://d2eyrb4mi2batg.cloudfront.net/public/dharmayana-flower.svg" />
                <Image
                    alt="Dharmāyana Logo"
                    loading="lazy"
                    width="1" height="1"
                    className="logo-title-img w-[10.18rem] h-[1.5rem] "
                    src="/Dharmayana.svg" />

            </div>
            <ul className='grid gap-[1rem] font-sans '>
                <Link href={`/home`}>
                    <li className='transition ease-in-out delay-150 duration-300 rounded-xl py-[0.5rem] px-[1rem] font-[500] text-[14px] hover:bg-[#AB3A12] hover:text-white flex gap-[12px] ] cursor-pointer' onMouseEnter={() => {
                        invertIconColor(document.querySelector('.home-sidebar-icon'))
                    }}
                        onMouseLeave={() => {
                            invertIconColor(document.querySelector('.home-sidebar-icon'))

                        }}
                    >
                        <Image className='home-sidebar-icon transition ease-in-out delay-150 duration-300' src={'/home-sidebar.svg'} alt='home-sidebar-icon' width={16} height={16}></Image>
                        <span>
                            Home
                        </span>
                    </li>
                </Link>
                {permissions.modules["customer_management"] && <Link href={`/customers`}>
                    <li className='transition ease-in-out delay-150 duration-300 rounded-xl py-[0.5rem] px-[1rem] font-[500] text-[14px] hover:bg-[#AB3A12] hover:text-white flex gap-[12px] ] cursor-pointer'
                        onMouseEnter={() => {
                            invertIconColor(document.querySelector('.customer-sidebar-icon'))
                        }}
                        onMouseLeave={() => {
                            invertIconColor(document.querySelector('.customer-sidebar-icon'))

                        }}
                    >
                        <Image className='customer-sidebar-icon transition ease-in-out delay-150 duration-300' src={'/customers-sidebar.svg'} alt='home-sidebar-icon' width={16} height={16}></Image>
                        <span>
                            Customers
                        </span>
                    </li>
                </Link>}
                {permissions.modules["astrology_services"] && <Link href={`/astrology`}>
                    <li className='transition ease-in-out delay-150 duration-300 rounded-xl py-[0.5rem] px-[1rem] font-[500] text-[14px] hover:bg-[#AB3A12] hover:text-white flex gap-[12px] ] cursor-pointer'
                        onMouseEnter={() => {
                            invertIconColor(document.querySelector('.astrology-sidebar-icon'))
                        }}
                        onMouseLeave={() => {
                            invertIconColor(document.querySelector('.astrology-sidebar-icon'))

                        }}
                    >
                        <Image className='astrology-sidebar-icon transition ease-in-out delay-150 duration-300' src={'/astrology-sidebar.svg'} alt='home-sidebar-icon' width={16} height={16}></Image>
                        <span>
                            Astrology Service
                        </span>
                    </li>
                </Link>}
                {permissions.modules["administration"] && <Link href={`/users`}>
                    <li className='transition ease-in-out delay-150 duration-300 rounded-xl py-[0.5rem] px-[1rem] font-[500] text-[14px] hover:bg-[#AB3A12] hover:text-white flex gap-[12px] cursor-pointer'
                        onMouseEnter={() => {
                            invertIconColor(document.querySelector('.users-sidebar-icon'))
                        }}
                        onMouseLeave={() => {
                            invertIconColor(document.querySelector('.users-sidebar-icon'))

                        }}
                    >
                        <Image className='users-sidebar-icon transition ease-in-out delay-150 duration-300' src={'/user-management-sidebar.svg'} alt='home-sidebar-icon' width={16} height={16}></Image>
                        <span>
                            User Management
                        </span>
                    </li>
                </Link>}
            </ul>

        </div>
    )
}

export default SideBar
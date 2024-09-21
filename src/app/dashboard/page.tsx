'use client'
import React from 'react'
import BreadCrumb from '../../componenets/BreadCrumb'
import FeatureCard from '@/componenets/Dashboard/FeatureCard';
import { Feature } from '@/globalTypes';
import Image from 'next/image';
import Link from 'next/link';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';


const Dashboard = () => {

    const CONTROL_CENTER_DEPARTMENT_FEATURES: {
        [departmengtType: string]: {
            has_access: boolean,
            features: Feature[]
        }
    } = {
        'Customer_Management': {
            has_access: true,
            features: [
                {
                    has_access: true,
                    featureIconURL: '/customer-listing.svg',
                    featureHeading: 'Customer List',
                    featureDescription: 'View All Paid Customers and their Details',
                    featureBtnLabel: 'Go to Page'
                }
            ]
        },
        'Astrology_Service': {
            has_access: true,
            features: [
                {
                    has_access: true,
                    featureIconURL: '/astro-orders.svg',
                    featureHeading: 'Orders',
                    featureDescription: 'View All Astrology Orders',
                    featureBtnLabel: 'Go to Page'
                },
                {
                    has_access: true,
                    featureIconURL: '/catalog-management.svg',
                    featureHeading: 'Catalog Management',
                    featureDescription: 'View All Paid Customers and their Details',
                    featureBtnLabel: 'Go to Page'
                }
            ]
        },
        'Administration': {
            has_access: true,
            features: [
                {
                    has_access: true,
                    featureIconURL: '/user-management.svg',
                    featureHeading: 'User Management',
                    featureDescription: 'View All Paid Customers and their Details',
                    featureBtnLabel: 'Go to Page'
                }
            ]
        }
    };

    const invertIconColor = (icon: HTMLImageElement | null) => {
        if (icon) {
            icon.classList.toggle('brightness-0');
            icon.classList.toggle('invert');
        }

    }
    return (
        <div className={`flex`}>
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
                </ul>

            </div>
            <div className={`flex flex-col w-full h-screen overflow-scroll z-0`}>
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
                <div className={` flex flex-col dashboard-section py-[1.5rem] px-[2rem] gap-[40px] font-sans`} onClick={() => {
                    document.querySelector('.logout-container')?.classList.toggle('hidden');

                }}>
                    <BreadCrumb pathname={'/dashboard'} />
                    <h1 className=' text-[2rem] text-[#171717] font-[700]'>Welcome to Control Center</h1>
                    <div className='feature-department-listing grid gap-[40px] '>
                        {
                            Object.keys(CONTROL_CENTER_DEPARTMENT_FEATURES).map((department: string) => {


                                return <div key={Math.random()} className=' grid gap-[24px]'>
                                    <h2 className=' text-[1.5rem] text-[#171717] font-[600]'>{department.replaceAll('_', ' ')}</h2>
                                    <div className='grid rounded-lg  bg-[#FFFFFF] border-[#D4D4D4]  border-2 p-6 gap-[24px]'>
                                        {
                                            CONTROL_CENTER_DEPARTMENT_FEATURES[department].features.map((feature, index) => {

                                                return <div key={Math.random()} className='grid gap-[24px]'>
                                                    <FeatureCard baseClass={'Dashboard'} featureIconURL={feature.featureIconURL} featureHeading={feature.featureHeading} featureDescription={feature.featureDescription} featureBtnLabel={feature.featureBtnLabel} />
                                                    {(CONTROL_CENTER_DEPARTMENT_FEATURES[department].features.length > 1) && (index < CONTROL_CENTER_DEPARTMENT_FEATURES[department].features.length - 1) ? <hr className='border-1 border-[#D4D4D4] lg:w-[90%] lg:relative lg:left-[10%]' /> : <></>}
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>

                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
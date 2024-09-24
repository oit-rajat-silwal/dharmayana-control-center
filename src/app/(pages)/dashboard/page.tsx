import React from 'react'
import FeatureCard from '@/componenets/Dashboard/FeatureCard';
import { Feature } from '@/globalTypes';

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
                    featureBtnLabel: 'Go to Page',
                    featurePageURL:"/customers"
                }
            ]
        },
        // 'Astrology_Service': {
        //     has_access: true,
        //     features: [
        //         {
        //             has_access: true,
        //             featureIconURL: '/astro-orders.svg',
        //             featureHeading: 'Orders',
        //             featureDescription: 'View All Astrology Orders',
        //             featureBtnLabel: 'Go to Page',
        //             featurePageURL:"/astrology/orders"

        //         },
        //         {
        //             has_access: true,
        //             featureIconURL: '/catalog-management.svg',
        //             featureHeading: 'Catalog Management',
        //             featureDescription: 'View All Paid Customers and their Details',
        //             featureBtnLabel: 'Go to Page',
        //             featurePageURL:"/astrology/catalog"

        //         }
        //     ]
        // },
        'Administration': {
            has_access: true,
            features: [
                {
                    has_access: true,
                    featureIconURL: '/user-management.svg',
                    featureHeading: 'User Management',
                    featureDescription: 'View All Paid Customers and their Details',
                    featureBtnLabel: 'Go to Page',
                    featurePageURL:"/users"

                }
            ]
        }
    };


    return (
        <>
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
                                            <FeatureCard baseClass={'Dashboard'} featureIconURL={feature.featureIconURL} featureHeading={feature.featureHeading} featureDescription={feature.featureDescription} featureBtnLabel={feature.featureBtnLabel}  featurePageURL={feature.featurePageURL}/>
                                            {(CONTROL_CENTER_DEPARTMENT_FEATURES[department].features.length > 1) && (index < CONTROL_CENTER_DEPARTMENT_FEATURES[department].features.length - 1) ? <hr className='border-1 border-[#D4D4D4] lg:w-[90%] lg:relative lg:left-[10%]' /> : <></>}
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                    })
                }
            </div>
        </>
    )
}

export default Dashboard


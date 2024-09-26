'use client'
import React, { useEffect } from 'react'
import FeatureCard from '@/componenets/Dashboard/FeatureCard';
import { Feature } from '@/globalTypes';
import { useRouter } from 'next/navigation';
import { usePermissions } from '@/contexts/PermissionsContext';
import { CONTROL_CENTER_MODULES } from '@/globalConstants';

// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';


const Home = () => {

    const router = useRouter();
    const { setPermissions, loader, permissions, setLoader } = usePermissions();

    useEffect(() => {
        const fetchUserPermissions = async () => {
            try {
                const response = await fetch('/api/permissions/admin', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${document.cookie.split('access_token=')[1]?.split(';')[0]}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch permissions');
                }

                const data = await response.json();
                setPermissions(data); // Store permissions in the global context

            } catch (error) {
                console.error('Error fetching permissions:', error);
                router.push('/unauthorized');
            }
        };

        fetchUserPermissions();
    }, []);

    useEffect(() => {
        // console.log(permissions);
        setLoader(false);
    }, [permissions])

    return (
        <>
            <h1 className=' text-[2rem] text-[#171717] font-[700]'>Welcome to Control Center</h1>
            <div className='feature-department-listing grid gap-[40px] '>
                {
                    !loader ? Object.keys(permissions.modules).map((module: string) => {


                        return <div key={Math.random()} className=' grid gap-[24px]'>
                            <h2 className=' text-[1.5rem] text-[#171717] font-[600]'>{module.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
                            <div className='grid rounded-lg  bg-[#FFFFFF] border-[#D4D4D4]  border-2 p-6 gap-[24px]'>
                                {
                                    Object.keys(permissions.modules[module].features).map((feature, index) => {
                                        // console.log(CONTROL_CENTER_MODULES[module].features,feature);
                                        return <div key={Math.random()} className='grid gap-[24px]'>
                                            <FeatureCard baseClass={'Home'}
                                                featureIconURL={CONTROL_CENTER_MODULES[module].features[feature].featureIconURL}
                                                featureHeading={CONTROL_CENTER_MODULES[module].features[feature].featureHeading}
                                                featureDescription={CONTROL_CENTER_MODULES[module].features[feature].featureDescription}
                                                featureBtnLabel={CONTROL_CENTER_MODULES[module].features[feature].featureBtnLabel}
                                                featurePageURL={CONTROL_CENTER_MODULES[module].features[feature].featurePageURL}
                                                featurePermissionKey={feature}
                                            />
                                            {(Object.keys(permissions.modules[module].features).length > 1) && (index < Object.keys(permissions.modules[module].features).length - 1) ? <hr className='border-1 border-[#D4D4D4] lg:w-[90%] lg:relative lg:left-[10%]' /> : <></>}
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                    }) : <p>Loading...</p>
                }
            </div>
        </>
    )
}

export default Home



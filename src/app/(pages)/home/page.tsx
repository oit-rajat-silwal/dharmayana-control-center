'use client'
import React from 'react'
import FeatureCard from '@/componenets/Dashboard/FeatureCard';
import { useAppContext } from '@/contexts/AppContext';
import { CONTROL_CENTER_SERVICES as CONTROL_CENTER_SERVICES } from '@/globalConstants';
import { ControlCenterService } from '@/globalTypes';



const Home = () => {

    const { loader, permissions, } = useAppContext();

    return (
        <>
            {permissions && <div>
                <h1 className=' text-[2rem] text-[#171717] font-[700]'>Welcome to Control Center</h1>
                <div className='feature-department-listing grid gap-[40px] '>
                    {
                        !loader ? Object.keys(permissions).map((serviceName: string) => {
                            const service: ControlCenterService = CONTROL_CENTER_SERVICES.filter((service) => service.permissionKey === serviceName)[0];
                            return <div key={Math.random()} className=' grid gap-[24px]'>
                                <h2 className=' text-[1.5rem] text-[#171717] font-[600]'>{service.name.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
                                <div className='grid rounded-lg  bg-[#FFFFFF] border-[#D4D4D4]  border-2 p-6 gap-[24px]'>
                                    {
                                        permissions[serviceName].map((action: string) => {
                                            // console.log(service.actions, action);
                                            if (service.actions[action])
                                                return <div key={Math.random()} className='grid gap-[24px]'>
                                                    <FeatureCard baseClass={'Home'}
                                                        actionURL={service.actions[action].actionURL}
                                                        actionHeading={service.actions[action].actionHeading}
                                                        actionDescription={service.actions[action].actionDescription}
                                                        actionBtnLabel={service.actions[action].actionBtnLabel}
                                                        actionPageURL={service.actions[action].actionPageURL}
                                                        permissionRequest={{ requestedService: service.permissionKey, requestedAction: action }}
                                                    />
                                                    {/* {(permissions[serviceName].length > 1) && (index < permissions[serviceName].length - 1) ? <hr className='border-1 border-[#D4D4D4] lg:w-[90%] lg:relative lg:left-[10%]' /> : <></>} */}
                                                </div>
                                        })
                                    }
                                </div>
                            </div>

                        }) : <p>Loading...</p>
                    }
                </div>
            </div>}
        </>
    )
}

export default Home



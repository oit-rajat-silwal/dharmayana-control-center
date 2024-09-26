'use client'
import { useAuthorizationRedirect } from '@/app/utils/auth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const FeatureCard = (
  { baseClass,
    actionURL,
    actionHeading,
    actionDescription,
    actionBtnLabel,
    actionPageURL,
    permissionRequest,
  }: {
    baseClass: string,
    actionURL: string,
    actionHeading: string,
    actionDescription: string,
    actionBtnLabel: string,
    actionPageURL: string,
    permissionRequest: {
      requestedService: string,
      requestedAction: string
    }
  }) => {
  const authorizeAndRedirect = useAuthorizationRedirect();
  const router = useRouter();
  const goToPage = () => {
    if (authorizeAndRedirect( permissionRequest)) {
      router.push(actionPageURL);
    }

  }
  return (
    <div className={`${baseClass} grid  lg:flex  lg:justify-between lg:items-center  gap-[24px] `}>
      <div className={`flex gap-[0.8rem] `}>
        <Image src={actionURL} width={76} height={76} className='rounded-sm mx-1' alt='customer-listing-icon'></Image>
        <div className=' grid gap-[0.5rem] p-[0.5rem]'>
          <p className={` text-[1.5rem] font-[600] text-[#171717]`}>{actionHeading}</p>
          <p className={` text-[1rem] font-[500] text-[#737373]`}>{actionDescription}</p>
        </div>
      </div>

      <div className='h-[40px] rounded-md border-2 py-2 px-4 flex gap-2 bg-[#F5F5F5] items-center justify-center cursor-pointer hover:scale-105 lg:hover:scale-110 transition duration-200  ease-in-out' onClick={goToPage} >
        <span className='text-[#CD5712] font-sans font-[500]'>
          {actionBtnLabel}
        </span>
        <Image src={'/feature-card-button-arrow.svg'} width={6} height={10} alt='feature-card-button-arrow-icon'></Image>
      </div>

    </div>
  )
}

export default FeatureCard
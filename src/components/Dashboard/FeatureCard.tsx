import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeatureCard = (
  { baseClass,
    featureIconURL,
    featureHeading,
    featureDescription,
    featureBtnLabel,
    featurePageURL,
  }: {
    baseClass: string,
    featureIconURL: string,
    featureHeading: string,
    featureDescription: string,
    featureBtnLabel: string,
    featurePageURL: string,
  }) => {
  return (
    <div className={`${baseClass} grid  lg:flex  lg:justify-between lg:items-center  gap-[24px] `}>
      <div className={`flex gap-[0.8rem] `}>
        <Image src={featureIconURL} width={76} height={76} className='rounded-sm mx-1' alt='customer-listing-icon'></Image>
        <div className=' grid gap-[0.5rem] p-[0.5rem]'>
          <p className={` text-[1.5rem] font-[600] text-[#171717]`}>{featureHeading}</p>
          <p className={` text-[1rem] font-[500] text-[#737373]`}>{featureDescription}</p>
        </div>
      </div>
      <Link href={featurePageURL}>
        <div className='h-[40px] rounded-md border-2 py-2 px-4 flex gap-2 bg-[#F5F5F5] items-center justify-center cursor-pointer hover:scale-105 lg:hover:scale-110 transition duration-200  ease-in-out' >
          <span className='text-[#CD5712] font-sans font-[500]'>
            {featureBtnLabel}
          </span>
          <Image src={'/feature-card-button-arrow.svg'} width={6} height={10} alt='feature-card-button-arrow-icon'></Image>
        </div>
      </Link>
    </div>
  )
}

export default FeatureCard
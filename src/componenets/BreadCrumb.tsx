'use client'
import { noto_sans } from '@/globalConstants';
import { Breadcrumbs, Link } from '@mui/material'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const BreadCrumb = ({ pathname }: { pathname: string }) => {
    const [pages, setPages] = useState(['']);
    useEffect(() => {
        const pageHistory = [...pages];
        const newPages = pathname.split("/");
        newPages.forEach((page: string) => {
            if (!pageHistory.includes(page)) {
                pageHistory.push(page);
            }
        })
        setPages(pageHistory);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])
    function toCapitalCase(str: string) {
        return str
            .toLowerCase()
            .split(' ')
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ').replaceAll('@', ' at ').replaceAll('_', ' ');
    }
    return (
        <Breadcrumbs
            className={`  text-[14px] font-[500]`}
            separator={
                <Image
                    src={`/breadcrumbSeparator.svg`}
                    alt=">"
                    priority={true}
                    loading='eager'
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    width={1} height={1} />
            }>  
            {
                pages.map((page: string, index: number) => {
                    return <Link key={page} href={`${index > 1 ? pathname : '/' + page}`}
                        className={`${index === pages.length - 1 ? 'text-black' : 'text-[#8F8B8B]'} ${noto_sans.className} no-underline`} >
                        {page === "" ? 'Home' : page === 'articles' ? 'Sacred Threads' : toCapitalCase(page.replaceAll("-"," ").replaceAll("_"," "))}
                    </Link>
                })
            }
        </Breadcrumbs>
    )
}

export default React.memo(BreadCrumb)
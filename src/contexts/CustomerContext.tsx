// festivalsContext.tsx
import { getCookie } from '@/app/utils/auth';
import { CustomerDetailsType, CustomerSearchParams, SortOption, } from '@/globalTypes';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface CustomerContextType {
    loader: boolean,
    customers: CustomerDetailsType[],
    selectedCustomer: CustomerDetailsType,
    sortOption: SortOption,
    currentPage: number,
    searchParams: CustomerSearchParams,
    customersPerPage: number,
    // totalCustomers: number,
    setSearchParams: (searchParams: CustomerSearchParams) => void,
    fetchCustomers: (currentPage: number, searchParams: CustomerSearchParams) => void,
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void,
    handleSorting: (sortOption: SortOption) => void,
    handlePageChange: (value: number) => void,
    setSelectedCustomer: (selectedCustomer: CustomerDetailsType) => void
    handleViewCustomer: (customerData: CustomerDetailsType) => void
}


const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export const CustomerProvider = ({ children }: { children: ReactNode }) => {
    // const [loader, setLoader] = useState(true)
    const loader = true;
    const [customers, setCustomers] = useState<CustomerDetailsType[]>([]);
    const router = useRouter();
    const [selectedCustomer, setSelectedCustomer] = useState<CustomerDetailsType>({
        "id": '',
        "name": '',
        "dob": '',
        "email": '',
        "gender": '',
        "location": '',
        "app_region": '',
        "phone_number": '',
        "age": 0,
        "since": ''
    })
    const [sortOption, setSortOption] = useState<SortOption>('name');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchParams, setSearchParams] = useState<CustomerSearchParams>({
        name: '',
        phone: ''
    })
    const customersPerPage: number = 10;
    // const [totalCustomers, setTotalCustomers] = useState(0);

    const handlePageChange = (value: number) => {
        setCurrentPage(value); // Update the current page
    };

    const fetchCustomers = async (currentPage: number, searchParams: CustomerSearchParams) => {
        const url = `${process.env.NEXT_PUBLIC_CC_BACKEND_BASE_URL}customer/v1/customers?page=${currentPage}&size=${customersPerPage}${searchParams.name ? `&name=${searchParams.name}` : ''}${searchParams.phone ? `&phone=${searchParams.phone}` : ''}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie('access_token')}`,
            }
        });

        if (response.ok) {
            const data = await (await response.json()).data;
            setCustomers(data);
            // setTotalCustomers(data.);
        } else {
            console.error('Failed to fetch users:', response.status);
        }
    };

    const sortCustomers = (customers: CustomerDetailsType[], sortBy: SortOption): CustomerDetailsType[] => {
        return [...customers].sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'gender':
                    return a.gender.localeCompare(b.gender);
                case 'age':
                    return a.age - b.age;
                case 'since':
                    return new Date(a.since).getTime() - new Date(b.since).getTime();
                default:
                    return 0;
            }
        });
    };

    const handleSorting = (sortOption: SortOption) => {
        setSortOption(sortOption);
    };

    useEffect(() => {
        if (customers.length) {
            setCustomers(sortCustomers(customers, sortOption));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortOption])

    useEffect(() => {
        fetchCustomers(currentPage, searchParams);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.key === 'Enter') {
            setCurrentPage(1);
            document.querySelector('.recent-search-list')?.classList.add('hidden');

            fetchCustomers(1, searchParams);
        }
    };

    const handleViewCustomer = (customerData: CustomerDetailsType) => {
        setSelectedCustomer(customerData);

    }
  useEffect(() => {
        if (selectedCustomer) {
            router.push(`/customers/${selectedCustomer.name.replaceAll(" ", "-")}`)
        }
    }, [selectedCustomer])
    return (
        <CustomerContext.Provider value={{
            loader,
            customers,
            sortOption,
            currentPage,
            searchParams,
            customersPerPage,
            // totalCustomers,
            selectedCustomer,
            setSearchParams,
            fetchCustomers,
            handleKeyDown,
            handleSorting,
            handlePageChange,
            setSelectedCustomer,
            handleViewCustomer
        }}>
            {children}
        </CustomerContext.Provider>
    );
};

export const useCustomerContext = () => {
    const context = useContext(CustomerContext);
    if (context === undefined) {
        throw new Error('useFestivalContext must be used within a FestivalProvider');
    }
    return context;
};

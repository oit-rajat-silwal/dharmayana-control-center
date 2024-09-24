// festivalsContext.tsx
import UserUpdate from '@/app/(pages)/users/[userSlug]/page';
import { Festival, Location, Months, SortOption, UserDetails } from '@/globalTypes';
import { usePathname, useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';







interface UserContextType {
    loader: boolean,
    users: UserDetails[],
    selectedUser: UserDetails,
    sortOption: SortOption,
    currentPage: number,
    searchText: string,
    userPerPage: number,
    totalUsers: number,
    setSearchText: (searchText: string) => void,
    fetchUsers: (currentPage: number, searchText: string) => void,
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void,
    handleSorting: (sortOption: SortOption) => void,
    handlePageChange: (_event: React.ChangeEvent<unknown>, value: number) => void,
    setSelectedUser: (selectedUser: UserDetails) => void
    handleEditUser: (userData: UserDetails) => void
}


const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [loader, setLoader] = useState(true)
    const [users, setUsers] = useState<UserDetails[]>([]);
    const router = useRouter();
    const pathname = usePathname();
    const [selectedUser, setSelectedUser] = useState<UserDetails>({
        "id": "", "name": "", "email": "", "created_on": "", "role":
            [], "last_login": "", "status": false
    })
    const [sortOption, setSortOption] = useState<SortOption>('name');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchText, setSearchText] = useState<string>('')
    const userPerPage: number = 5;
    const [totalUsers, setTotalUsers] = useState(0);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value); // Update the current page
    };

    const fetchUsers = async (currentPage: number, searchText: string) => {
        const url = `/api/users?page=${currentPage}&size=${userPerPage}${searchText.length ? `&search=${searchText}` : ''}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            setUsers(data.users);
                setTotalUsers(data.totalUsers);
        } else {
            console.error('Failed to fetch users:', response.status);
        }
    };



    const sortUsers = (users: UserDetails[], sortBy: SortOption): UserDetails[] => {
        return [...users].sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'last_login':
                    return new Date(a.last_login).getTime() - new Date(b.last_login).getTime();
                default:
                    return 0;
            }
        });
    };

    const handleSorting = (sortOption: SortOption) => {
        setSortOption(sortOption);
    };

    useEffect(() => {
        if (users.length) {
            setUsers(sortUsers(users, sortOption));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortOption])

    useEffect(() => {
        fetchUsers(currentPage, searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.key === 'Enter') {
            setCurrentPage(1);
            document.querySelector('.recent-search-list')?.classList.add('hidden');

            fetchUsers(1, searchText || '');
        }
    };

    const handleEditUser = (userData: UserDetails) => {
        setSelectedUser(userData);

    }
    useEffect(() => {
        if (selectedUser) {
            router.push(`/users/${selectedUser.name.replaceAll(" ", "-")}`)
        }
    }, [selectedUser])

    return (
        <UserContext.Provider value={{
            loader,
            users,
            sortOption,
            currentPage,
            searchText,
            userPerPage,
            totalUsers,
            selectedUser,
            setSearchText,
            fetchUsers,
            handleKeyDown,
            handleSorting,
            handlePageChange,
            setSelectedUser,
            handleEditUser
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useFestivalContext must be used within a FestivalProvider');
    }
    return context;
};

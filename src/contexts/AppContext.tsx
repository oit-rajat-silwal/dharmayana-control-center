'use client';
import { Permission, PermissionsContextProps } from '@/globalTypes';
import { fetchUserPermissions } from '@/services/app-services';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

const AppContext = createContext<PermissionsContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [loader, setLoader] = useState(true)
    const [permissions, setPermissions] = useState<Permission>({ });
    useEffect(() => {
        if (!Object.keys(permissions).length)
            (async () => {
                const response = await fetchUserPermissions();
                setPermissions(response);
            })()
    }, []);

    useEffect(() => {
        // console.log(permissions);
        setLoader(false);
    }, [permissions])
    return (
        <AppContext.Provider value={{ permissions, setPermissions, loader, setLoader }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
};

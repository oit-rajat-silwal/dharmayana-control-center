'use client';

import { deleteCookie } from '@/app/utils/auth';
import { Permission, PermissionsContextProps } from '@/globalTypes';
import { fetchUserPermissions } from '@/services/app-services';
import router from 'next/router';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

const AppContext = createContext<PermissionsContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [loader, setLoader] = useState(true)
    const [permissions, setPermissions] = useState<Permission>({ });
    useEffect(() => {
        if (!Object.keys(permissions).length)
            (async () => {

                try {
                    const response = await fetchUserPermissions();
                    if (!response.ok) {
                        throw new Error('Failed to fetch permissions');
                    }
                    const data = (await await response.json()).data;
                    setPermissions(data); // Store permissions in the global context
                } catch (error) {
                    console.error('Error fetching permissions:', error);

                    // Show an alert to the user
                    alert(error + ' You will be redirected to Login page in few secs');

                    // Set a timeout to redirect after 5 seconds
                    setTimeout(() => {
                        // Delete tokens from cookies
                        deleteCookie('access_token');
                        deleteCookie('refresh_token');

                        // Remove the expiry from localStorage
                        localStorage.removeItem('token_expiry');
                        localStorage.removeItem('zoho_oauth_state');
                        router.push('/'); // Redirect to the home page
                    }, 5000);
                }

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

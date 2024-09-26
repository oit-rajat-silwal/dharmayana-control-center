'use client';

import { Permission, PermissionsContextProps } from '@/globalTypes';
import { createContext, useContext, useState, ReactNode } from 'react';

const AppContext = createContext<PermissionsContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [loader, setLoader] = useState(true)
    const [permissions, setPermissions] = useState<Permission>({
        modules: {
            customer_management: {
                features: {
                    customer_listing: {
                        actions: {
                            "view": false,
                            "block": false,  // Future functionality
                            "delete": false,  // Future functionality
                            "update": false  // Future functionality
                        }
                    }
                }
            }
        }
    });

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

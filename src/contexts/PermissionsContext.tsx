// context/PermissionsContext.tsx
'use client';

import { Permission } from '@/globalTypes';
import { createContext, useContext, useState, ReactNode } from 'react';



interface PermissionsContextProps {
    permissions: Permission;
    loader: boolean;
    setLoader: (value: boolean) => void;
    setPermissions: (permissions: Permission) => void;
}

const PermissionsContext = createContext<PermissionsContextProps | undefined>(undefined);

export const PermissionsProvider = ({ children }: { children: ReactNode }) => {
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
        <PermissionsContext.Provider value={{ permissions, setPermissions, loader, setLoader }}>
            {children}
        </PermissionsContext.Provider>
    );
};

export const usePermissions = () => {
    const context = useContext(PermissionsContext);
    if (context === undefined) {
        throw new Error('usePermissions must be used within a PermissionsProvider');
    }
    return context;
};

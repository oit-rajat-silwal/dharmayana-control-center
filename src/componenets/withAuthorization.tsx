// components/withAuthorization.tsx
'use client';

import { usePermissions } from '@/contexts/PermissionsContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const withAuthorization = (WrappedComponent: any, requiredFeature: string) => {
    return (props: any) => {
        const router = useRouter();
        const { permissions } = usePermissions();
        const [isLoading, setIsLoading] = useState(true); // Tracks whether permissions are still loading
        const [isAuthorized, setIsAuthorized] = useState(false); // Tracks if the user is authorized

        useEffect(() => {
            // Check if permissions are loaded and valid
            if (permissions && permissions.modules) {
                console.log('Permissions:', permissions); // Debug: Log the permissions structure
                
                // Traverse through the permissions to find the required feature
                const hasFeatureAccess = Object.values(permissions.modules).some(module =>
                    module.features?.[requiredFeature]?.actions?.view
                );

                console.log(`Checking access for feature ${requiredFeature}:`, hasFeatureAccess); // Debug

                // Set loading to false after permission check
                setIsAuthorized(hasFeatureAccess);
                setIsLoading(false);

                // If no access, redirect to unauthorized
                if (!hasFeatureAccess) {
                    router.push('/unauthorized');
                }
            } else {
                console.log('Permissions not yet loaded or empty'); // Debug
                setIsLoading(true);
            }
        }, [permissions, requiredFeature, router]);

        // Render loading state until permission check completes
        if (isLoading) {
            return <div>Loading...</div>;
        }

        // If authorized, render the wrapped component
        return isAuthorized ? <WrappedComponent {...props} /> : null;
    };
};

export default withAuthorization;

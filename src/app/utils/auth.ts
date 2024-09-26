'use client'
import { NextResponse } from 'next/server';
import { usePermissions } from '@/contexts/PermissionsContext';
import { useCallback, useEffect, useState } from 'react';

export function useAuthorizationRedirect() {
    const { permissions } = usePermissions();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Make sure this hook only runs on the client
        setIsMounted(true);
    }, []);

    const redirectWithAuthorization = useCallback(
        (route: string, requiredFeature: string) => {
            if (!isMounted) return;

            // Check if permissions are loaded and valid
            if (permissions && permissions.modules) {
                // Traverse through the permissions to find the required feature
                const hasFeatureAccess = Object.values(permissions.modules).some(module =>
                    module.features?.[requiredFeature]?.actions?.view
                );

                // Redirect based on the access check
                if (hasFeatureAccess) {
                    window.location.href = route; // Redirect to the intended route
                } else {
                    window.location.href = '/unauthorized'; // Redirect to unauthorized
                }
            } else {
                // If permissions are not available yet, redirect to unauthorized as a fallback
                window.location.href = '/unauthorized';
            }
        },
        [permissions, isMounted]
    );

    return redirectWithAuthorization;
}



export function verifyToken(req: Request) {
  // Extract cookies from the request headers
  const cookies = req.headers.get('cookie');

  // Retrieve the access_token and refresh_token from the cookies
  const accessToken = cookies?.split('access_token=')[1]?.split(';')[0];
  const refreshToken = cookies?.split('refresh_token=')[1]?.split(';')[0];

  // Check if both tokens are present
  if (!accessToken || !refreshToken) {
    // If either token is missing, return an unauthorized response
    return { success: false, response: NextResponse.json({ message: 'Unauthorized: Missing tokens' }, { status: 401 }) };
  } else {
    // If both tokens are present, return success
    return { success: true };
  }
}


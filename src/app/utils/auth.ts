'use client'
import { NextResponse } from 'next/server';
import { useAppContext } from '@/contexts/AppContext';
import { useCallback, useEffect, useState } from 'react';

export function useAuthorizationRedirect() {
    const { permissions } = useAppContext();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Make sure this hook only runs on the client
        setIsMounted(true);
    }, []);

    const redirectWithAuthorization = useCallback(
        (permissionRequest: {requestedService:string,requestedAction:string}) => {
            console.log(permissionRequest);
            if (!isMounted) return;

            // Check if permissions are loaded and valid
            if (permissions) {
                // Traverse through the permissions to find the required feature
                const hasFeatureAccess = permissions[permissionRequest.requestedService].some(action => {
                console.log(action,permissionRequest.requestedAction)    
                    return action === permissionRequest.requestedAction
                });

                // Redirect based on the access check
                return hasFeatureAccess
            } else {
                console.log("outer")
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

export const deleteCookie = (name: string) => {
    document.cookie = `${name}=; Max-Age=0; path=/; Secure; SameSite=Strict`;
};

export const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
};
import { deleteCookie, getCookie } from "@/app/utils/auth";

export const fetchUserPermissions = async () => {

    try {
        const url = `${process.env.NEXT_PUBLIC_CC_BACKEND_BASE_URL}auth/v1/permissions`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie('access_token')}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch permissions');
        }
        return (await await response.json()).data;
        // Store permissions in the global context
    } catch (error) {

            // Delete tokens from cookies
            deleteCookie('access_token');
            deleteCookie('refresh_token');

            // Remove the expiry from localStorage
            localStorage.removeItem('token_expiry');
            localStorage.removeItem('zoho_oauth_state');
            window.location.href = `/error/`;
     
    }

};
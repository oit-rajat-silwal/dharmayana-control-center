import { getCookie } from "@/app/utils/auth";

export const fetchUserPermissions = async () => {
    const url = `${process.env.NEXT_PUBLIC_CC_BACKEND_BASE_URL}auth/v1/permissions`
    return await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${getCookie('access_token')}`,
        },
    });

};
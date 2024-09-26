'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const ZohoCallback = () => {
  console.log('called');
  const router = useRouter();
  const searchParams = useSearchParams();

  // Retrieve `code` from the URL query parameters
  const code = searchParams.get('code');

  useEffect(() => {
    const fetchTokens = async () => {
      const state = localStorage.getItem('zoho_oauth_state');

      if (code && state) {
        try {
          const url = `${process.env.NEXT_PUBLIC_CC_BACKEND_BASE_URL}auth/v1/auth-details`
          // Send the POST request to the backend API
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              state: state,
              code: code,
            }),
          });

          // Check if the response is not okay
          if (!response.ok) {
            throw new Error('Failed to fetch Zoho tokens');
          }

          // Extract the data from the response
          const data = await (await response.json()).data;
          const { access_token, refresh_token, expires_in_seconds } = data;

          // Store tokens securely
          document.cookie = `access_token=${access_token}; path=/; Secure; SameSite=Strict`;
          document.cookie = `refresh_token=${refresh_token}; path=/; Secure; SameSite=Strict`;

          // Optional: Store expiration time if you need to refresh the token before it expires
          const expiresAt = Date.now() + expires_in_seconds * 1000;
          localStorage.setItem('token_expiry', expiresAt.toString());

          console.log('Tokens stored:', { access_token, refresh_token, expires_in_seconds });

          // Redirect to the home page after successfully obtaining tokens
          router.push('/home');
        } catch (error) {
          console.error('Error fetching Zoho tokens:', error);
          // Handle the error (e.g., redirect to login or show a user-friendly error message)
          router.push('/error'); // Redirect to an error page or back to login
        }
      } else {
        // Redirect to the login page if no code or state is found
        router.push('/');
      }
    };

    fetchTokens();
  }, [code, router, searchParams]);

  return <div>Logging you in, please wait...</div>;
};

export default ZohoCallback;

// app/auth/callback/page.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

const ZohoCallback = () => {
  console.log("called");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Retrieve `code` and `state` from the URL query parameters
  const code = searchParams.get('code');

  useEffect(() => {
    const fetchTokens = async () => {
      const state = localStorage.getItem('zoho_oauth_state');

      if (code && state) {
        try {
          // Use the native fetch API to send the POST request to the backend API
          const response = await fetch('https://api.stage.dharmayana.in/control-center/auth/v1/auth-details', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              state: state,
              code: code,
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to fetch Zoho tokens');

          }

          const data = await response.json();

          const { access_token, refresh_token } = data;

          // Store the tokens in cookies or localStorage
          document.cookie = `access_token=${access_token}; path=/; Secure; HttpOnly`;
          document.cookie = `refresh_token=${refresh_token}; path=/; Secure; HttpOnly`;

          router.push('/home');
        } catch (error) {
          router.push('/');
          console.error('Error fetching Zoho tokens:', error);
          // Handle the error (e.g., redirect back to login or show an error message)
        }
      }
    };

    fetchTokens();
  }, []);

  return <Suspense><div>Logging you in, please wait...</div>;</Suspense>
};

export default ZohoCallback;

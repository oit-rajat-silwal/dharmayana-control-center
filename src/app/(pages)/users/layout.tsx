'use client'

import { UserProvider } from "@/contexts/UserContext";


export default function UsersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <UserProvider>

            {children}

        </UserProvider>

    );
}

'use client'

import { UserProvider } from "@/contexts/UserContext";
import { usePathname } from "next/navigation";


export default function UsersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    return (
        <UserProvider>

            {children}

        </UserProvider>

    );
}

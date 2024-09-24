'use client'
import { CustomerProvider } from "@/contexts/CustomerContext";

export default function CustomersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CustomerProvider>

            {children}

        </CustomerProvider>

    );
}

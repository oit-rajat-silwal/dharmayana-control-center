'use client'
import { CustomerProvider } from "@/contexts/CustomerContext";
import { usePathname } from "next/navigation";

export default function CustomersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    return (
        <CustomerProvider>

            {children}

        </CustomerProvider>

    );
}

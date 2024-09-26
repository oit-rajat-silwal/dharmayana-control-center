import { Suspense } from "react";

export default function GroupLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (

        <Suspense>

            {children}

        </Suspense>

    );
}

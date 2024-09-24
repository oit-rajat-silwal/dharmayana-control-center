import { verifyToken } from "@/app/utils/auth";
import { CustomerDetailsType } from "@/globalTypes";
import { CUSTOMER_DATA } from "@/services/customer-services";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    const tokenCheck = verifyToken(req);
    if (!tokenCheck.success) {
        return tokenCheck.response;
    }

    // Parse query params
    const url = new URL(req.url);
    const name = url.searchParams.get('name')?.toLowerCase() || '';
    const phone = url.searchParams.get('phone')?.toLowerCase() || '';
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const size = parseInt(url.searchParams.get('size') || '5', 10);

    // Filter users by name or phone or both
    const filteredCustomers = CUSTOMER_DATA.filter((customer: CustomerDetailsType) => {
        const nameMatch = customer.name.toLowerCase().includes(name);
        const phoneMatch = customer.phone_number?.toLowerCase().includes(phone);

        // Return users that match either name, phone, or both
        return (name ? nameMatch : true) && (phone ? phoneMatch : true);
    });

    // Pagination logic
    const totalCustomers = filteredCustomers.length;
    const startIndex = (page - 1) * size;
    const paginatedCustomers = filteredCustomers.slice(startIndex, startIndex + size);

    return NextResponse.json({
        customers: paginatedCustomers,
        totalCustomers,
    });
}
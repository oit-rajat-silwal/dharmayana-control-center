import { verifyToken } from "@/app/utils/auth";
import { USER_DATA } from "@/services/user_services";
import { NextResponse } from "next/server";
import { v4 as uuidV4 } from "uuid"


export async function GET(req: Request) {
    const tokenCheck = verifyToken(req);
    if (!tokenCheck.success) {
        return tokenCheck.response;
    }

    // Parse query params
    const url = new URL(req.url);
    const search = url.searchParams.get('search') || '';
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const size = parseInt(url.searchParams.get('size') || '5', 10);
  
    // Filter users by search query
    let filteredUsers = USER_DATA;
    if (search) {
        filteredUsers = USER_DATA.filter((user) => {
            const nameParts = user.name.toLowerCase().split(' ');
            return nameParts.some((part) => part.startsWith(search.toLowerCase()));
        });
    }

    // Pagination logic
    const totalUsers = filteredUsers.length;
    const startIndex = (page - 1) * size;
    const paginatedUsers = filteredUsers.slice(startIndex, startIndex + size);

    return NextResponse.json({
        users: paginatedUsers,
        totalUsers,
    });
}

// PUT: Update a user
export async function PUT(req: Request) {
    const tokenCheck = verifyToken(req);
    if (!tokenCheck.success) {
        return tokenCheck.response;  // Return unauthorized if token is invalid
    }

    const body = await req.json();
    const { id, role, status } = body;

    // Find and update the user
    const user = USER_DATA.find((u) => u.id === id);
    if (user) {
        user.role = role;
        user.status = status;
        return NextResponse.json({ success: true, message: 'User updated successfully.' });
    } else {
        return NextResponse.json({ success: false, message: 'User not found.' }, { status: 404 });
    }
}

// POST: Add a new user
export async function POST(req: Request) {
    const tokenCheck = verifyToken(req);
    if (!tokenCheck.success) {
        return tokenCheck.response;  // Return unauthorized if token is invalid
    }

    const body = await req.json();
    const { name, role, email } = body;

    // Add the new user to the list
    const newUser = {
        id: uuidV4(),
        name,
        email,
        role,
        created_on: new Date().toISOString(),
        last_login: new Date().toISOString(),
        status: true, // default status
    };

    USER_DATA.push(newUser);

    return NextResponse.json({
        success: true,
        message: `A new user ${email} has been added successfully.`,
    });
}
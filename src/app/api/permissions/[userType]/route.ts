// app/api/permissions/[userType]/route.ts

import { NextResponse } from 'next/server';

// Mock permissions based on user type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const permissionsByUserType: Record<string, any> = {
    "admin": {
        "modules": {
            "customer_management": {
                "features": {
                    "customer_listing": {
                        "actions": {
                            "view": true,
                            "block": false,
                            "delete": false,
                            "update": false
                        }
                    }
                }
            },
            "administration": {
                "features": {
                    "user_listing": {
                        "actions": {
                            "view": true,
                            "add": true,
                            "update": true,
                            "delete": false,  // Can be enabled later when implemented
                            "edit_permissions": true
                        }
                    }
                }
            },
            "astrology_services": {
                "features": {
                    "orders": {
                        "actions": {
                            "view": true,
                            "add": true,
                            "update": true,
                            "delete": true
                        }
                    },
                    "catalog_management": {
                        "actions": {
                            "view": true,
                            "add": true,
                            "update": true,
                            "delete": true
                        }
                    }
                }
            }
        }
    },
    "user": {
        "modules": {
            "customer_management": {
                "features": {
                    "customer_listing": {
                        "actions": {
                            "view": true,
                            "block": false,  // Future functionality
                            "delete": false,  // Future functionality
                            "update": false  // Future functionality
                        }
                    }
                }
            },
            "astrology_services": {
                "features": {
                    "orders": {
                        "actions": {
                            "view": true,
                            "add": true,
                            "update": true,
                            "delete": true
                        }
                    },
                    "catalog_management": {
                        "actions": {
                            "view": true,
                            "add": true,
                            "update": true,
                            "delete": true
                        }
                    }
                }
            }
        }
    }
}

// Function to handle the mock API request
export async function GET(req: Request, { params }: { params: { userType: string } }) {
    const { userType } = params;

    // Check if the requested userType has mock permissions defined
    const userPermissions = permissionsByUserType[userType];

    if (userPermissions) {
        return NextResponse.json(userPermissions);
    } else {
        return NextResponse.json({ error: 'User type not found' }, { status: 404 });
    }
}

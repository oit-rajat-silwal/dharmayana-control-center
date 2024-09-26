export interface Feature {
    has_access: boolean,
    actionURL: string,
    actionHeading: string,
    actionDescription: string,
    actionBtnLabel: string,
    actionPageURL: string,
}

export type Customer = {
    id: string;
    name: string;
    gender: string;
    age: number;
    phone: string;
    since: string;
};
export type CustomerDetailsType = {
    "id": string,
    "name": string,
    "dob": string,
    "email": string,
    "gender": string,
    "location": string,
    "app_region": string,
    "phone_number": string,
    "age": number,
    "since": string
};

export type SortOption = 'name' | 'gender' | 'age' | 'since' | 'role' | 'last_login' | 'status';

export type UserDetails = {
    id: string;
    name: string;
    email: string;
    created_on: string;
    role: string[];
    last_login: string;
    status: boolean;
}

export interface FormData {
    name: string;
    email: string;
    role: string[] |string;
}
export interface UserEditFormData {
    status: boolean;
    role: string[];
}


export interface CustomerSearchParams {
    name: string,
    phone: string
}

export interface Permission {
    [featureName: string]: string[]
}


export interface PermissionsContextProps {
    permissions: Permission;
    loader: boolean;
    setLoader: (value: boolean) => void;
    setPermissions: (permissions: Permission) => void;
}

// {
//     "data": {
//         "customer": [
//             "details"
//         ],
//         "user_management": [
//             "list",
//             "details",
//             "create"
//         ]
//     },

export interface ControlCenterService {
    name: string,
    permissionKey:string,
    actions: {
        [feature: string]: {
            actionURL: string,
            actionHeading: string,
            actionDescription: string,
            actionBtnLabel: string,
            actionPageURL: string
        }
    }
}
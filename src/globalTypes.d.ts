export interface Feature {
    has_access: boolean,
    featureIconURL: string,
    featureHeading: string,
    featureDescription: string,
    featureBtnLabel: string,
    featurePageURL: string,
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
    role: string[];
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
    modules: {
        [moduleName: string]: {
            features: {
                [featureName: string]: {
                    actions: {
                        "view": boolean,
                        "block": boolean,  // Future functionality
                        "delete": boolean,  // Future functionality
                        "update": boolean  // Future functionality
                    }
                }
            }
        }
    }
}

export interface PermissionsContextProps {
    permissions: Permission;
    loader: boolean;
    setLoader: (value: boolean) => void;
    setPermissions: (permissions: Permission) => void;
}
import { Inter, Noto_Sans, Noto_Serif, Ubuntu, Roboto, Great_Vibes } from 'next/font/google';
import styled from '@emotion/styled';
import { Checkbox, MenuItem, Button } from '@mui/material';

//API_SERVICES_CONSTANTS 
export const revalidate = { revalidate: 3600 };

//GOOGLE_FONTS_CLASS_OBJECTS which are used throughout the app as a tailwind class. 
export const inter = Inter({ subsets: ['latin'] });
export const noto_sans = Noto_Sans({
    display: 'swap',
    style: "normal",
    subsets: ['latin']
});
export const noto_serif = Noto_Serif({
    display: 'swap',
    style: "normal",
    subsets: ['latin']
});
export const ubuntu = Ubuntu({
    display: 'swap',
    style: 'normal',
    subsets: ['latin'],
    weight: '400',

});
export const ubuntu_500 = Ubuntu({
    display: 'swap',
    style: 'normal',
    subsets: ['latin'],
    weight: '500',

});
export const ubuntu_700 = Ubuntu({
    display: 'swap',
    style: 'normal',
    subsets: ['latin'],
    weight: '700',

});
export const roboto = Roboto({
    display: 'swap',
    style: 'normal',
    subsets: ['latin'],
    weight: '400',

});
export const great_vibes = Great_Vibes({
    display: 'swap',
    style: 'normal',
    subsets: ['latin'],
    weight: '400',

});


// eslint-disable-next-line  @typescript-eslint/no-unused-vars
export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    width: "16px",
    height: "16px",
    "&.Mui-checked": {
        color: "#CD5712",
    },
}));

// Custom styles for the select menu item on hover
// eslint-disable-next-line   @typescript-eslint/no-unused-vars
export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
        backgroundColor: "#FEF7EC",
    },
}));
export const CloseButton = styled(Button)({
    backgroundColor: "#CD5712",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid",
    gap: "8px",
    float: 'right',
    color: "#FFF",
    "&:hover": {
        backgroundColor: "#CD5712",
    },
});
//eslint-disable-next-line @typescript-eslint/prefer-as-const
export const style = {
    //eslint-disable-next-line @typescript-eslint/prefer-as-const
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "0.5rem",
    boxShadow: 24,
    p: 4,
};


export const CONTROL_CENTER_MODULES: {
    [module: string]: {
        name: string,
        features: {
            [feature: string]: {
                featureIconURL: string,
                featureHeading: string,
                featureDescription: string,
                featureBtnLabel: string,
                featurePageURL: string
            }
        }
    }
} = {
    customer_management: {
        name: 'Customer Management',
        features: {
            customer_listing: {

                featureIconURL: '/customer-listing.svg',
                featureHeading: 'Customer List',
                featureDescription: 'View All Paid Customers and their Details',
                featureBtnLabel: 'Go to Page',
                featurePageURL: "/customers"
            }
        }
    },
    astrology_services  : {
        name: 'Astrology Services',
        features: {
            orders: {

                featureIconURL: '/astro-orders.svg',
                featureHeading: 'Orders',
                featureDescription: 'View All Astrology Orders',
                featureBtnLabel: 'Go to Page',
                featurePageURL: "/astrology/orders"

            },
            catalog_management: {

                featureIconURL: '/catalog-management.svg',
                featureHeading: 'Catalog Management',
                featureDescription: 'View All Paid Customers and their Details',
                featureBtnLabel: 'Go to Page',
                featurePageURL: "/astrology/catalog"

            }
        }
    },
    administration: {
        name: 'Administrartion',
        features: {
            user_listing: {

                featureIconURL: '/user-management.svg',
                featureHeading: 'User Management',
                featureDescription: 'View All Paid Customers and their Details',
                featureBtnLabel: 'Go to Page',
                featurePageURL: "/users"

            }
        }
    }
};



import { Inter, Noto_Sans, Noto_Serif, Ubuntu, Roboto, Great_Vibes } from 'next/font/google';
import { FeatureDescriptions, Months, Rashi, Testimonial } from "@/globalTypes"
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

//Description data rendered in the carousel section, describing each app feature screenshot in the /apps route  
export const DEMO_DESCRIPTIONS: FeatureDescriptions[] = [
    {
        icon: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/CalendarCheck.svg`,
        heading: "Daily Calendar",
        descriptions: [
            "Stay informed about important dates with our easy-to-use Hindu calendar",
            "Find auspicious & inauspicious times during the day",
            "Set reminders for good and bad muhurta",

        ],
        alt: "Calendar Icon"
    },
    {
        icon: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/SunHorizon.svg`,
        heading: "Panchanga",
        descriptions: [
            "Find Tithi, Vaara, Nakshatra, Yoga, and Karana",
            "View Panchanga for past and future dates",
        ],
        alt: "Sun Set Icon"
    },
    {
        icon: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/HourglassMedium.svg`,
        heading: "Shubh Muhurta",
        descriptions: [
            "Align yours actions with favourable celestial moments",
            "Find auspicious & inauspicious times during the day",
            "Find auspicious days for starting new project, ceremonies, and special occasions",

        ],
        alt: "Hour glass icon"
    },
    {
        icon: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/lamp.svg`,
        heading: "Festivals and Observances",
        descriptions: [
            "Find dates for festivals, and observances like Amavasya, Ekadasi and more",
            "Get timely reminder to prepare for speical days",
            "Learn about the significance of each special day",

        ],
        alt: "Lamp icon"
    },
    {
        icon: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/book.svg`,
        heading: "Learn More",
        descriptions: [

            "Broaden your understanding of the hindu calendar system",
            "Learn about Panchanga and its elements, and insights on speical days",


        ],
        alt: "Book icon"
    },
    {
        icon: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/PrarthnaIcon.svg`,
        heading: "Prarthna",
        descriptions: [
            'Find prayers for your ista-devata - along with its meaning.',
            'Daily 5-minute prayer is now very easy with a customised daily prayer list.'
        ],
        alt: "Prarthna icon"
    },
];

// Constant holding testimonials rendered in the testimonial section of /apps route
export const TESTIMONIALS: Testimonial[] = [
    {
        author: "Vivek79 Yadav",
        review: "I discovered this app through Reddit, and wow, this app is amazing. I don't have any problems with Dharmayana yet, so that's good. I also love the aesthetics of the app.",
        stars: "5",
        date: "January 15, 2024",
    },
    {
        author: "Ramkumar Durgam",
        review: "Excellent app with a very clean UX and accurate information. Must have for anyone who follows the Hindu calendar.",
        stars: "5",
        date: "January 4, 2024",
    },
    {
        author: "Niranjan Joshi",
        review: "Very nice and accurate tool. Awaiting Festival module to be launched to provide the details of what the festivals r about",
        stars: "5",
        date: "January 27, 2024"
    },
    {
        author: "Anupama rao",
        review: `A great one stop app for instant info about auspicious days and dates.`,
        stars: "5",
        date: "January 2, 2024"
    },
    {
        author: "Varma Alluri",
        review: `Very useful app with panchanga information in your fingertips.`,
        stars: "5",
        date: "January 4, 2024"
    },


];

// Constant holding alt text for images in the carousel section in the /apps route 
export const APP_SCREEN_SHOTS: string[] = [
    "App's Home page demo screenshot",
    "App's  Panchanga page demo screenshot",
    "App's 'good day for' search feature screenshot",
    "App's Festival page demo screenshot",
    "App's home demo screenshot",

];

// Constant holding days of week used to render whole 'day' as per the date in festivalView  feature 
export const daysOfWeek: { [day: string]: string } = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday",
};

// Constant holding days of week used to render whole 'day' as per the date in festivalView  feature 
export const MONTHS: Months = {
    'JANUARY': [],
    'FEBRUARY': [],
    'MARCH': [],
    'APRIL': [],
    'MAY': [],
    'JUNE': [],
    'JULY': [],
    'AUGUST': [],
    'SEPTEMBER': [],
    'OCTOBER': [],
    'NOVEMBER': [],
    'DECEMBER': [],
};

export const DEFAULT_LOCATION = {
    lat: 23.41667,
    long: 75.5,
    city: 'Ujjain',
};

export const RASHIES: Rashi[] = [
    {
        vedic_name: 'Mesha',
        english_name: 'Aries',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/aries-mesha.svg`
    },
    {
        vedic_name: 'Vrishabha',
        english_name: 'Taurus',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/taurus-vrishabha.svg`
    },
    {
        vedic_name: 'Mithuna',
        english_name: 'Gemini',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/gemini-mithuna.svg`
    },
    {
        vedic_name: 'Karka',
        english_name: 'Cancer',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/cancer-karka.svg`
    },
    {
        vedic_name: 'Simha',
        english_name: 'Leo',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/leo-simha.svg`
    },
    {
        vedic_name: 'Kanya',
        english_name: 'Virgo',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/virgo-kanya.svg`
    },
    {
        vedic_name: 'Tula',
        english_name: 'Libra',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/libra-tula.svg`
    },
    {
        vedic_name: 'Vrischika',
        english_name: 'Scorpio',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/scorpio-vrischika.svg`
    },
    {
        vedic_name: 'Dhanu',
        english_name: 'Sagittarius',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/sagittarius-dhanu.svg`
    },
    {
        vedic_name: 'Makara',
        english_name: 'Capricorn',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/capricorn-makara.svg`
    },
    {
        vedic_name: 'Kumbha',
        english_name: 'Aquarius',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/aquarius-kumbha.svg`
    },
    {
        vedic_name: 'Meena',
        english_name: 'Pisces',
        image_url: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/pisces-meena.svg`
    },
]


// Custom styles for the checkbox
// eslint-disable-next-line @typescript-eslint/prefer-as-const
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

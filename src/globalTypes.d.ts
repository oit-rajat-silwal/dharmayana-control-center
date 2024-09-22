// Types used in Article Feature


//Describes arcticle's content block schema send from the CMS 
export interface ContentBlock {
    "type": string,
    "format"?: string,
    "children": unknown,
    "level"?: number
}

//Describes response schema sent by the CMS for each article 
export interface ArticleCardData {
    id: number,
    attributes: ArticleAttributes
}
// Schema describes the attribute section for each article object sent by CMS   
export interface ArticleAttributes {
    title: string,
    Created: string,
    content:
    ContentBlock[],
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: string
    heading: string
}

// Types used in Panchanga fesature 

// Type describes the tithi schema in the "panchanga details for today" object
export interface Tithi {
    "name": string,
    "key": string,
    "end_time": number,
    "start_time": number
}
// Type describes the Nakshatra schema in the "panchanga details for today" object
export interface Nakshatra {
    "name": string,
    "key": string,
    "end_time": number,
    "start_time": number
}

// Type describes the Ayana schema in the "panchanga details for today" object
export interface Ayana {
    "name": string,
    "key": string
}

// Type describes the Suntiming schema in the "panchanga details for today" object
export interface SunTiming {
    "rise": number,
    "set": number
}

// Type describes the MoonTiming schema in the "panchanga details for today" object
export interface MoonTiming {
    "rise": number,
    "set": number
}

// Type describes the Mada schema in the "panchanga details for today" object
export interface Masa {
    "amanta"?: string,
    "purnima"?: string
}

// these Types describes a year in the year's schema in the "panchanga details for today" object
export interface VikramYear {
    "name": string,
    "key": string,
    "year": number
}

export interface SakaYear {
    "name": string,
    "key": string,
    "year": number
}
export interface KaliYear {
    "name": string,
    "key": string,
    "year": number
}
export interface Years {
    "vikram"?: VikramYear,
    "saka"?: SakaYear,
    "kali"?: KaliYear
}

// These types describe a muhurat in the Muhurat schema in the "panchanga details for today" object
export interface AuspiciousMuhurat {
    "name": string,
    "key": string,
    "end_time": number,
    "start_time": number
}
export interface InauspiciousMuhurat {
    "name": string,
    "key": string,
    "end_time": number,
    "start_time": number
}
export interface Muhurat {
    "auspicious": AuspiciousMuhurat[],
    "inauspicious": InauspiciousMuhurat[]
}

// Type describes a Ritu(Weather) schema in the "panchanga details for today" object
export interface Ritu {
    "name": string,
    "key": string,
    "sub_text": string
}

// Type describes a Vaara schema in the "panchanga details for today" object
export interface Vaara {
    "name": string,
    "key": string,
    "sub_text": string
}

// Type describes a Karana schema in the "panchanga details for today" object
export interface Karana {
    "name": string,
    "key": string,
    "end_time": number,
    "start_time": number
}

// Type describes a Yoga schema in the "panchanga details for today" object

export interface Yoga {
    "name": string,
    "key": string,
    "end_time": number,
    "start_time": number
}
export interface FestivalUIInfo {
    bg_image: string;
    bg_image_v1: string;
    share_image: string;
    share_image_v1: string;
}
// Type describes a festival/observances schema in the "panchanga details for today" object
export interface FestivalsOrObservancesData {
    "id": string,
    "name": string,
    "key": string,
    "type": string,
    "sub_type": string,
    "tier": number,
    "aliases": string[],
    "description_1": string,
    "description_2": string,
    "ui_info": FestivalUIInfo,
    "eclipse_info": unknown,
    "upcoming_dates": number[],
    "observance_id": string,
    "observance_name": string,
    "tithi_key": string
}

// Type describes the "panchanga details for today" object received as a response from the banckend 
export interface PanchangaDetails {
    "tithi": Tithi[],
    "paksha": string,
    "masa": Masa,
    "paksha_v1"?: {
        "name": "",
        "key": ""
    }
    "nakshatra": Nakshatra[],
    "ayana": Ayana,
    "shubh_karyas": string[],
    "sun": SunTiming,
    "moon": MoonTiming,
    "years": Years,
    "muhurat": Muhurat,
    "ritu": Ritu,
    "vaara": Vaara,
    "karana": Karana[],
    "yoga": Yoga[],
    "observances": FestivalsOrObservancesData[],

}

// Type describes a Shubhkarya schema fetched in the configuration api for shubhdin feature
export interface ShubhKarya {
    "key": string,
    "display_name": string,
    "applied_display_name": string,
    "description": string,
    "icon_url": string
}

// Type describes a Festival/Observances object schema in the list of observances in "panchanga details for today"  object
export interface Festival {
    "date": number,
    "data": FestivalsOrObservancesData,
    "panchanga": PanchangaDetails
}

// Type describes a location object schema in the list of suggested locations recieved in response from the geolocation API 
export interface SuggestedLocation {
    "area_name": string,
    "state": string,
    "country": string,
    "lat": number,
    "long": number,
    "timezone": string,
    "offset": number
}

// Type describes a location object schema used to store location data that will finally render the selected/user location on the UI.
export interface Location {
    lat: number,
    long: number,
    city: string,
}

// Type describes schema of props used to generate meat data for all slug pages  
export type MetaProps = {
    params: { [key: string]: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

// Type describes a testimonial object schema that will finally render the testimonials from the global consts to the Testimonial section of the apps component .
export type Testimonial = {
    author: string,
    review: string,
    stars: string,
    date: string,
}

// Type describes a location object schema used to store location data that will finally render the selected/user location on the UI.
export type FeatureDescriptions = {
    icon: string,
    heading: string,
    descriptions: string[],
    alt: string
}

export type Deity = {
    id: string,
    title: string,
    prarthana_count: number,
    image_url: string,
    ui_info: {
        image_url: string,
    }
}
export type Prarthana = {
    "id": string,
    "title": string,
    "hls_audio_url": string,
    "audio_url": string;
    "image_url": string,
    "banner_image_url": string,
    "duration": string,
    "is_audio_available": boolean,
    "ui_info": {
        "image_url": string,
        "banner_image_url": string
    }
}
export type DeityInfo = {
    "title": string,
    "description": string,
    "image_url": string,
    "prarthanas": Prarthana[],
    "is_audio_available": boolean,
    "ui_info": {
        "image_url": string
    }
}
export interface Months { [month: string]: Festival[] }

export interface Rashi {
    "vedic_name": string,
    "english_name": string,
    "image_url": string
}
export interface PredictionCategory {
    "key": string,
    "name": string,
    "score": number,
    "split_response": string
}

export interface Prediction {
    "rashi": string,
    "date": string,
    "banner_image_url": string
    "lucky_number": number[]
    "lucky_color_code": string,
    "lucky_color": string,
    "rashi_image_url": string,
    "predictions": PredictionCategory[]
}
export interface Language {
    "key": string;
    "value": string;
}


export interface Article {
    thumbnail: string,
    tagline: string,
    content: unknown[],
    heading: string,
    tags: string[],
    publishDate: string,
    readTime: number,
    banner: string
    authorName: string,
    relatedBlogs: unknown[],
    authorImage: string,
    seo: unknown
}


export interface Feature {
    has_access: boolean,
    featureIconURL: string,
    featureHeading: string,
    featureDescription: string,
    featureBtnLabel: string
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
    id: string;
    name: string;
    email: string;
    dob: string,
    gender: string,
    location: string,
    app_region: string,
    phone_number: string
};

export type SortOption = 'name' | 'gender' | 'age' | 'since';
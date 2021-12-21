export interface Profile {
    name: string;
    secondName: string;
    lastName: string;
    birthDate: string;
    location: Location;
    occupation: string;
    contacts: Contacts;
    aboutMe: string;
    socialMedia: SocialMedia[];
    education: Course[];
    workExperience: JobPosition[];
    skills: Skill[];
    laguages: Language[];
}

export interface Contacts {
    email: string;
    telephone: string;
}

export interface Location {
    label: string;
    url: string;
}

export interface SocialMedia {
    label: string;
    url: string;
    icon: string;
}

export interface JobPosition {
    startDate: string;
    endDate?: string;
    period?: string;
    title: string;
    jobPosition: string;
    company: string;
}

export interface Course {
    startDate: string;
    endDate?: string;
    period?: string;
    title: string;
    institution: string;
}

export interface Skill {
    name: string;
    rate: number;
}

export interface Language {
    name: string;
    level: 'Basic' | 'Advanced' | 'Fluent' | 'Native';
    rate?: number;
}

export interface Profile {
    name: string;
    occupation: string;
    birthDate: string;
    contacts: Contacts;
    aboutMe: string;
    socialMedia: SocialMedia;
    education: Course[];
    workExperience: JobPosition[];
    skills: Skill[];
    laguages: Language[];
}

export interface Contacts {
    telephone: string;
    email: string;
}

export interface SocialMedia {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    site?: string;
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
}

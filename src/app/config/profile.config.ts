import { Profile } from "./profile.interface";

export const profileConfig: Profile = {
    name: 'Rafael',
    secondName: 'Teruyuki',
    lastName: 'Yamaguchi',
    location: {
      label: 'São Paulo, Brazil',
      url: 'https://goo.gl/maps/Q87Dm1QjMfYv37Ms9'
    },
    birthDate: '08/03/1989',
    occupation: 'Front-end Developer',
    aboutMe: 'I started as a graphic designer, now I write front-end code, read birth charts and check tarot cards.',
    contacts: {
      email: 'rafaelteruyuki08@gmail.com',
      telephone: '+55 11 98650-0584'
    },
    socialMedia: [
      {
        label: 'github.com/rafaelteruyuki',
        url: 'https://github.com/rafaelteruyuki',
        icon: 'fab fa-github'
      },
      {
        label: 'linkedin.com/in/rafaelteruyuki',
        url: 'https://www.linkedin.com/in/rafaelteruyuki/',
        icon: 'fab fa-linkedin-in'
      },
      {
        label: 'instagram.com/rafaelteruyuki',
        url: 'https://instagram.com/rafaelteruyuki',
        icon: 'fab fa-instagram'
      },
      {
        label: 'twitter.com/rafaelteruyuki',
        url: 'https://twitter.com/rafaelteruyuki',
        icon: 'fab fa-twitter'
      },
      {
        label: 'rafaelteruyuki.github.io',
        url: 'https://rafaelteruyuki.github.io/',
        icon: 'fas fa-globe'
      }

    ],
    laguages: [
      {
        name: 'Portuguese',
        level: 'Native'
      },
      {
        name: 'English',
        level: 'Advanced'
      },
      {
        name: 'French',
        level: 'Basic'
      }
    ],
    skills: [
      {
        name: 'HTML',
        rate: 10
      },
      {
        name: 'CSS',
        rate: 10
      },
      {
        name: 'JavaScript ES6',
        rate: 9
      },
      {
        name: 'Angular 6+',
        rate: 10
      },
      {
        name: 'TypeScript',
        rate: 8
      },
      {
        name: 'Git',
        rate: 8
      }
    ],
    education: [
      {
        startDate: '01/07/2009',
        endDate: '31/06/2013',
        institution: 'Centro Universitário Senac',
        title: 'Bachelor - Visual Communication Design'
      },
      {
        startDate: '15/09/2016',
        endDate: '15/09/2017',
        institution: 'FIAP',
        title: 'MBA - Moble Apps and Games Development - Internet of Things'
      },
      {
        startDate: '15/09/2021',
        institution: 'Alura',
        title: 'TypeScript'
      }
    ],
    workExperience: [
      {
        startDate: '01/02/2008',
        endDate: '05/11/2019',
        company: 'Senac São Paulo',
        title: 'UX/UI Designer / Front-end Developer',
        jobPosition: 'Junior Analyst'
      },
      {
        startDate: '06/11/2019',
        endDate: '14/09/2020',
        company: 'PRAVALER',
        title: 'Front-end Developer',
        jobPosition: 'Analyst'
      },
      {
          startDate: '15/09/2020',
          company: 'MJV Technology & Innovation',
          title: 'Front-end Developer',
          jobPosition: 'Senior Analyst'
      }
    ]
  }
  
import BarbershopImage from '@/assets/images/barbershop-website-image.png';
import ChessImage from '@/assets/images/chess-project-image.png';
import MediamonksLogo from '@/assets/images/mediamonkslogo.png';
import MedmeLogo from '@/assets/images/medmelogo.png';
import SpotifyProjectImage from '@/assets/images/spotify-project-image.png';
import TwitterCloneImage from '@/assets/images/twitter-clone-image.png';
import VidyardLogo from '@/assets/images/vidyardlogo.jpg';
const JOB_TITLE = 'Software Developer';
export default {
  home: {},
  about: {
    paragraph1: "Hey! My name is Raymond and I'm currently based in Toronto, Ontario!",
    paragraph2:
      'I am a scientist with a curiousity for technology. I was always fascinated in how technology can be implemented into our lives in so many different ways. Recently I decided to get up and stop watching the evolution of technology, and dive in to be apart of the change. I enrolled in many computer science courses and instantly fell in love with the field. Since discovering the tech industry, I have had the privilege of building software for health technology, Sales communication technology, and a design & experience agency.',
    paragraph3:
      "Currently, I'm seeking full time opportunities to apply my skills and contribute to a dynamic and innovative organization! When I'm not staring at the screen, I'm working out, playing volleyball, and trying to pull that perfect shot of espresso! "
  },
  experience: {
    workHistory: [
      {
        title: 'January - April 2023',
        cardTitle: 'Media Monks/Jam3',
        media: {
          type: 'IMAGE',
          source: {
            url: MediamonksLogo.src
          }
        },
        cardSubtitle: JOB_TITLE,
        cardDetailedText: `
        Spearheaded the implementation of Woven by Toyota's web application utilizing React, Typescript, and Contentful CMS. 
        Worked on a dynamic single page application to advertise the popular Mandalorian television series using Greensock Animation Library. 
        `
      },
      {
        title: 'January - August 2022',
        cardTitle: 'Vidyard',
        media: {
          name: 'vidyard',
          source: {
            url: VidyardLogo.src
          },
          type: 'IMAGE'
        },
        cardSubtitle: JOB_TITLE,
        cardDetailedText: `
          Collaborated on the onboarding team to develop rich features to help users integrate into the product efficiently and intuitively. 
          Revamped the onboarding process by developing a new flow with new pages in VueJS and Ruby on Rails, reducing onboarding friction and increasing successful onboarding rates. 
          Implemented video recording limitations and reduced video storages to 100,000+ users in order to promote higher tiered pricing packages.
          `
      },
      {
        title: 'May - August 2021',
        cardTitle: 'Medme Health',
        media: {
          name: 'Medme',
          source: {
            url: MedmeLogo.src
          },
          type: 'IMAGE'
        },
        cardSubtitle: JOB_TITLE,
        cardDetailedText: `
          Collaborated with the product manager and designer in a fast-paced environment to ship dynamic features for the COVID-19 Vaccine rollout. 
          Architected and developed a front-end feature that allows 1000+ pharmacists to personalize their appointment descriptions, emails, and SMS texts using a rich text editor in ReactJS, DraftJS, and Apollo GraphQL.
          Developed new ReactJS UIs that allow the clients of 800+ pharmacies to book vaccine appointments efficiently and intuitively.
        `
      }
    ]
  },
  projects: {
    personal: [
      {
        title: 'Online Chess',
        media: {
          type: 'IMAGE',
          source: {
            url: ChessImage.src
          }
        },
        link: 'https://github.com/raymondchuu/multiplayer-chess',
        description:
          'This game was designed so that clients can play chess with friends online in the comfort of their own homes. ReactJs was implemented in the front end that communicated with a back end server using NodeJS, Express, and SocketIO.'
      },
      {
        title: 'Twitter Clone',
        media: {
          type: 'IMAGE',
          source: {
            url: TwitterCloneImage.src
          }
        },
        link: 'https://github.com/raymondchuu/chirper',
        description:
          "A website that imitates the functionality of Twitter that's coded in ExpressJS and Express Handlebars.Client - sessions library was utilized to handle an authentication system and both MongoDB and PostgreSQL was used to handle storage of user accounts, as well as user chirps!"
      },
      {
        title: 'Barbershop Website',
        media: {
          type: 'IMAGE',
          source: {
            url: BarbershopImage.src
          }
        },
        link: 'https://github.com/raymondchuu/fullstack-barbershop-website',
        description:
          'A website designed so that customers may book appointments online. Developed front-end using React which communicates to a back-end Express API connected to a MongoDB database.'
      },
      {
        title: 'Spotify Playlist Generator',
        media: {
          type: 'IMAGE',
          source: {
            url: SpotifyProjectImage.src
          }
        },
        link: 'https://github.com/raymondchuu/spotify-playlist-generator',
        description:
          "Web application that generates a playlist by entering names of artists and adds the playlist on the user's Spotify account.Implemented React in the front end which communicates to the spotify API backend."
      }
    ]
  }
};

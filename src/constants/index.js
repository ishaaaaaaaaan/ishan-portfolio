export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Ecom-Store',
      desc: 'Designed and developed a user-friendly e-commerce store with seamless navigation, secure checkout, and responsive design. Integrated advanced features like product filtering, payment gateways, and Admin dashboard only for users who has admin privileges for an optimized shopping experience.',
      subdesc:
        'Built as a e-commerce web app with React, Tailwind CSS, TypeScript, Framer Motion, Express and Mongo DB, Ecom-Store is designed for optimal performance and scalability.',
      href: 'https://mern-ecommerce-atmo.onrender.com/',
      texture: './textures/project/project1.mp4',
      logo: './assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: './assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: './assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: './assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: './assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: './assets/framer.png',
        },
      ],
    },
    {
      title: 'W-Chat!',
      desc: 'Developed a real-time chat web application with instant messaging, user authentication, and responsive UI. Integrated features like chats, media sharing, and typing indicators for an engaging user experience.',
      subdesc:
        'With W-Chat!, users can experience instant messaging, responsive UI, Block and Unblock users in real time without any lag, by using ReactJS and Firebase newest features.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'CarePulse - Health Management System',
      desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
      subdesc:
        'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
      href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Chat-Bot GPT',
      desc: 'Built an AI-powered chatbot application with natural language processing for automated responses and seamless user interactions. Integrated with APIs and databases to provide real-time assistance, support, and task automation.',
      subdesc:
        'Built with Epress, Node.js and OpenAI, Chat-Bot GPT ensures a smooth and secure user experience, tailored to meet the needs of modern consumers.',
      href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: './assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: './assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: './assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: './assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: './assets/framer.png',
        },
      ],
    },
    {
      title: 'Web Extentions',
      desc: 'Live Crricket Score, Youtube Auto Play and Pause',
      subdesc:
        'Built with Javascript, HTML and CSS to create web extensions with a user-centric approach. It can be turned into a side income.',
      href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: './assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: './assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: './assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: './assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: './assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Cognizant Technology Solutions Corporation',
      pos: 'Associate',
      duration: '2021 - Present',
      title: "Designing, developing, and maintaining both front-end (UI/UX) and back-end (server, database, APIs) systems, ensuring application performance, security, scalability, and collaborate with cross-functional teams to deliver complete solutions.",
      icon: './assets/Cogni.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Citytech Software Private Limited',
      pos: 'Intern',
      duration: '2020 - 2021',
      title: "Building responsive user interfaces, implementing client-side logic, and integrating APIs also optimizing performance, ensure cross-browser compatibility, and maintain accessibility, SEO, and code quality through testing and version control.",
      icon: './assets/citytech.png',
      animation: 'clapping',
    },
    
  ];
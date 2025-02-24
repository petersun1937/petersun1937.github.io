module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://petersun1937.github.io`,
    // Your Name
    name: 'Peter Chih-Hsuan Sun',
    // Main Site Title
    title: `Peter Chih-Hsuan Sun's Portfolio`,
    // Description that goes under your name in main bio
    description: `MS Student @ Penn State University | Information Sciences and Technology`,
    // Optional: Twitter account handle
    // author: `@`,
    // Optional: Github account URL
    github: `https://github.com/petersun1937`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/peter-chih-hsuan-sun-a05379196/`,
    // Content of the About Me section
    about: `Graduate student at Information Sciences and Technology, Penn State University (Expected graduation Dec 2025, can be changed to Aug 2025). 

Previously studied at Electrical Engineering, Penn State University. 

Expertise in machine learning, backend systems, and software development.

Research background in ML/reinforcement learning algorithm design, simulation and analysis, combined with hands-on experience in backend and frontend development.

Proven ability to build scalable, cross-platform applications and apply analytical methods to solve complex problems.`,

    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Cross-Platform Tech Support Chatbot with RAG',
        description: `A chatbot that integrates Retrieval-Augmented Generation (RAG) with OpenAI and Dialogflow for smart intent detection and context-aware responses. 
        Built with a Go backend (Gin framework) and React frontend, supporting platforms like Facebook Messenger, Instagram, LINE, and Telegram.`,
        link: 'https://github.com/petersun1937/cross-platform-chatbot-rag',
      },
      {
        name: 'Forecasting Traffic Patterns: A Spatial-Temporal Graph Attention Network Approach',
        description: `Implemented an ML pipeline for traffic speed forecasting using Graph Neural Networks (GNNs) with GAT and RNN. 
        Integrated NYC Open Data and weather data to improve predictions.`,
        link: 'https://drive.google.com/file/d/1wRgZh7XxQFmdY3F77YTePlLq4gkwACyF/view?usp=drive_link',
      },
      {
        name: 'Threshold Bandits for Dynamic Spectrum Access with Rateless Codes',
        description: `Developed and analyzed UCB-based learning algorithms for dynamic spectrum allocation in wireless networks. 
        Achieved a 40-50% improvement over naive algorithms.`,
        link: 'https://github.com/petersun1937/thresholded_multi-armed_bandit',
      },
      {
        name: '5G Latency Measurement - Mini Project in POWDER Workshop',
        description: `Conducted 5G indoor OTA experiments using POWDER. Captured and analyzed traffic using Wireshark to evaluate latency in different scenarios.`,
        link: '', // No links available
      },
      {
        name: 'User Tracking Self-Driving Cart',
        description: `Designed and implemented self-driving and user-tracking features with a PyCar, using computer vision and localization techniques.`,
        link: 'https://docs.google.com/presentation/d/1aDyKqcHNyIpS_FzRo4IdM7J4i0JrdOta/edit?usp=drive_link&ouid=116411743149636168972&rtpof=true&sd=true',
      },
      {
        name: 'Survey - Machine Learning Approaches for Channel Estimation on mmWave Massive MIMO for 5G Networks',
        description: `Conducted a survey on ML-based 5G channel estimation techniques. Analyzed different machine learning methods for improving MIMO performance.`,
        link: 'https://drive.google.com/file/d/18Apa5yr_xswuYn2nAv_uM6qWXeeqco9C/view?usp=drive_link', 
      },
      {
        name: 'Senior Research Project: Temperature Monitoring System for Mask Aligner Improvement Plan',
        description: `Developed a 25-node temperature monitoring system with alert notifications. Used SPI to connect sensors to Arduino/Raspberry Pi and built a backend database with MySQL. 
        The front-end web UI was developed using HTML, PHP, and JavaScript for remote monitoring.`,
        link: 'https://youtu.be/uLwE-UL0L-M', 
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Graduate Research Assistant - Penn State University',
        description: `Designed and simulated ML algorithms for wireless communication problems, focusing on 5G beamforming and channel selection. 
        Contributed to NSF-funded research projects: "NeTS: Adaptive and Efficient Wireless Computing Networks" and "MLWiNS: Dino-RL".`,
        link: '',
      },
      {
        name: 'R&D Intern - Ingrasys Technology Inc. (Foxconn Subsidiary)',
        description: `Collaborated on a Wi-Fi Indoor Location Optimization project. 
        Translated MATLAB optimization algorithms into Java for real-world deployment.`,
        link: '',
      },
      {
        name: 'Software Developer Intern - SmartFun Digital Co. (Chunghwa Telecom Subsidiary)',
        description: `Developed an Android RSS Reader application using Java.`,
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Core',
        description: `Machine Learning, REST API Development, Backend & Frontend Development, Data Processing, Cloud, Algorithm Design, Git (Version Control)`,
      },
      {
        name: 'Languages & Frameworks',
        description: `Golang, Python, MATLAB, HTML, JavaScript, Node.js, React, Java, Gin`,
      },
      {
        name: 'Databases & Cloud',
        description: `PostgreSQL, MongoDB, MySQL, Google Cloud, AWS, Docker`,
      },
      {
        name: 'Machine Learning & NLP',
        description: `TensorFlow, PyTorch, Scikit-learn, Retrieval-Augmented Generation (RAG), Natural Language Processing (NLP)`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    /*{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },*/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PeterSunDevfolio`,
        short_name: `PeterSun`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mahmudaKeya', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        projects: [], // Manually specify projects
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Hosting a PHP Application with AWS',
          description:
            'Created a scalable setup with an EC2 instance (t2.micro) hosting a PHP application in a private subnet. Used RDS MySQL (t2.micro) in a private subnet for application data. Enabled autoscaling (2 instances) and set up ALB with CloudFront for secure browsing via subdomains. Used an existing wildcard certificate from AWS Certificate Manager for ALB/CloudFront (HTTP/HTTPS).',
          imageUrl:
            'https://cdn.icon-icons.com/icons2/2415/PNG/512/aws_icon_146437.png',
          link: '#',
        },
        {
          title: 'Terraform Automation for ECR and ECS',
          description:
            'Automated the creation and configuration of AWS ECR repositories and ECS services using Terraform for streamlined container deployment.',
          imageUrl:
            'https://static-00.iconduck.com/assets.00/terraform-icon-453x512-9qod433d.png',
          link: '#',
        },
        {
          title: 'GKE Pod Failure Slack Notifications',
          description:
            'Used Terraform, Google Cloud Platform (Pub/Sub, Cloud Functions), and Python to send a notification message to Slack upon GKE pod failure.',
          imageUrl:
            'https://cdn.icon-icons.com/icons2/2699/PNG/512/google_cloud_logo_icon_169343.png',
          link: '#',
        },
        {
          title: 'Dockerization of a 3-Tier Web Application',
          description:
            'Containerized a 3-tier web application (PHP) using Docker, enabling consistent environments and simplifying deployment.',
          imageUrl:
            'https://cdn.icon-icons.com/icons2/2415/PNG/512/docker_plain_wordmark_logo_icon_146506.png',
          link: '#',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mahmuda Akter Keya',
    description: 'DevOps and Cloud Engineer',
    imageURL: '',
  },
  social: {
    linkedin: 'mahmuda-keya-8b727917b',
    github: 'mahmudaKeya',
    email: 'mahmudakeya013@gmail.com',
  },
  resume: {
    fileUrl: '', // Add a link to your resume here.
  },
  skills: [
    'PHP',
    'Java',
    'Python',
    'HCL',
    'JavaScript',
    'HTML',
    'CSS',
    'MySQL',
    'RDBMS',
    'Flask',
    'Django',
    'Ansible',
    'Jenkins',
    'Docker',
    'Terraform',
    'Kubernetes',
    'AWS',
    'Google Cloud',
    'Linux',
    'Windows',
  ],
  experiences: [
    {
      company: 'BJIT',
      position: 'DevOps and Cloud Engineer',
      from: 'August 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'BJIT',
      position: 'Trainee Software Engineer- DevOps and Cloud',
      from: 'April 2023',
      to: 'July 2023',
      companyLink: '',
    },
    {
      company: 'Zuu.co.jp',
      position: 'SRE Intern',
      from: 'December 2022',
      to: 'February 2023',
      companyLink: '',
    },
    {
      company: 'Venturas',
      position: 'Japanese Language and Technical Training',
      from: 'May 2022',
      to: 'November 2022',
      companyLink: '',
    },
    {
      company: 'Banglalink',
      position: 'Virtual Intern',
      from: 'August 2021',
      to: 'October 2021',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Programming for Everybody (Getting Started with Python)',
      body: 'Coursera',
      year: '', // Add year if available
      link: '#', // Add link to certificate
    },
    {
      name: 'Python Data Structures',
      body: 'Coursera',
      year: '', // Add year if available
      link: '#', // Add link to certificate
    },
    {
      name: 'Google Cloud Platform Fundamentals: Core Infrastructure',
      body: 'Coursera',
      year: '', // Add year if available
      link: '#', // Add link to certificate
    },
  ],
  educations: [
    {
      institution: 'BRAC University',
      degree: 'Bachelor of Computer Science, Major in Software Engineering',
      from: '2018',
      to: '2022',
    },
    {
      institution: 'Viqarunnisa Noon College',
      degree: 'HSC (Science)',
      from: '2015',
      to: '2017',
    },
    {
      institution: 'Viqarunnisa Noon School & College',
      degree: 'SSC (Science)',
      from: '',
      to: '2015',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
